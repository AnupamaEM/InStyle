const express = require('express');
const knex = require('knex');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express(); 
const PORT = 3000; 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); 
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName); 
    },
});
const upload = multer({ storage }); 
app.use('/public/images', express.static(path.join(__dirname, 'public/images'))); 
app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const db = knex({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'nodestudent',
      password: 'nodestudent',
      database: 'instyle',
    },
  });
  
app.get('/', (req, res) => {
  res.send('Hai hello'); 
});


// get all products 
app.get('/products', async (req, res) => {
    const products = await db('dresses').select('*');     
    const baseUrl = 'http://localhost:3000'; 
    const productsWithFullImagePath = products.map(product => ({
        ...product,
        imagePath: baseUrl + product.imagePath,
    }));
    res.json(productsWithFullImagePath);
});


// get products by id 
app.get('/product/:id', async (req, res) => {
  const prid = req.params.id;
  const baseUrl = 'http://localhost:3000'; 
  const product = await db('dresses').where({ id: prid });

  if (product.length > 0) {
     
      product[0].imagePath = `${baseUrl}/public/images/${product[0].imagePath}`;
  }

  res.json(product);
});

// app.get('/product/:id', async (req, res) => {
//     const prid=req.params.id;
//     const product = await db('dresses').where({id:prid}); 
//     res.json(product); 
// });


// delete product by id 
 app.delete('/product/delete/:id',async(req,res) => {
    const prid=req.params.id;
    const product = await db('dresses').where({id:prid}).del();
    res.json({message:'product deleted'});
 });


// post products 
app.post('/product/add', upload.single('image'), async (req, res) => {
    const { name, cost, description } = req.body;
    const imagePath = `/images/${req.file.filename}`; 

    
        const [newProduct] = await db('dresses').insert({ name, cost, imagePath, description });
        res.json({ message: 'Product inserted', productId: newProduct });
});

// update products 
app.put('/product/update/:id',async(req,res)=>{
    const prid=req.params.id;
    const { name, cost, imagePath,description } = req.body;
    await db('dresses').where({id:prid}).update({name,cost,imagePath,description})
    res.json({message:'product updated'});
});


// sign up
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [id] = await db('users').insert({ username, email, password });
    res.json({ message: 'User created successfully', id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

//signin
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await db('users').where({ username });

      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      if (password === user.password) {
        res.status(200).json({ message: 'Sign-in successful' });
      } else {
        res.status(400).json({ message: 'Invalid credentials' });
      }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







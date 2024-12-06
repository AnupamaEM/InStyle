const express = require('express');
const knex = require('knex');
const app = express(); 
const PORT = 3000; 
app.use(express.json());


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
      res.json(products); 
  });

// get products by id 
app.get('/product/:id', async (req, res) => {
    const prid=req.params.id;
    const product = await db('dresses').where({id:prid}); 
    res.json(product); 
});

// delete product by id 
 app.delete('/product/delete/:id',async(req,res) => {
    const prid=req.params.id;
    const product = await db('dresses').where({id:prid}).del();
    res.json({message:'product deleted'});
 });

// post products 
app.post('/product/add',async(req,res)=>{
    const { name, cost, imagePath } = req.body;
    const [newProduct] = await db('dresses').insert({name: name,cost: cost,imagePath: imagePath,});
    res.json({message:'product inserted'});
});

// update products 
app.put('/product/update/:id',async(req,res)=>{
    const prid=req.params.id;
    const { name, cost, imagePath } = req.body;
    await db('dresses').where({id:prid}).update({name,cost,imagePath})
    res.json({message:'product updated'});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

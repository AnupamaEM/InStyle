import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/table.css";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

const defaultData = [
  { firstName: 'jhon', lastName: 'doe', age: 47, job:'it' },
  { firstName: 'amy', lastName: 'lea', age: 22,job:'non-it'  },
  { firstName: 'ivy', lastName: 'rae', age: 24, job:'non-it'},
];

// /**
//  * @typedef {Object} Person
//  * @property {string} firstName 
//  * @property {string} lastName 
//  * @property {number} age 
//  * @property {string} job 
//  */

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('firstName', { header: 'First Name', footer: info => info.column.id }),
  columnHelper.accessor('lastName',{ header: 'Last Name', footer: info => info.column.id }),
  columnHelper.accessor('age', { header: 'Age', footer: info => info.column.id }),
  columnHelper.accessor('job', { header: 'Job', footer: info => info.column.id }),
];

export default function Table() {
  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    
    <div className="table-container">
            <Header />

      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />    
      </div>
  );
}
//  export default NewTable;
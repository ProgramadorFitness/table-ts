import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPaginate from 'react-paginate';
import data2 from './data.json'

function App() {

  const data = data2

  const [paginaACtual, setCurrentPage] = useState(0);
  const itemPorPagina: number = 10;

  
  return (
    <div>
      <div>
        <h1 className='title'>Table Dynamic</h1>
      </div>

      <div>
        <table className='table'>
          <thead className='thead'>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Ciudad</th>
              <th>Telefono</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {data.slice(paginaACtual * itemPorPagina, (paginaACtual + 1) * itemPorPagina).map((item) => (
              <tr>
                <td className='td'>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.ciudad}</td>
                <td>{item.telefono}</td>
                <td>{item.direccion}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
        <ReactPaginate
        className='paginate'
        previousLabel={'anterior'}
        nextLabel={'siguiente'}
        breakLabel={'...'}
        pageCount={Math.ceil((data?.length || 0) / itemPorPagina)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={''}
        activeClassName={'paginateActive'}
        pageClassName={'pageclass'}
        previousClassName={'nextandprevius'}
        nextClassName={'nextandprevius'} />
      </div>
      
    </div>
  );
}

export default App;

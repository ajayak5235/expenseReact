// import React, {useState} from 'react';
// import './App.css';
// import ProductForm from './Component/inputForm';

// const ProductList = ({products,onDelete}) => (
//   <ul>
//     {products.map(product =>{
//       <li key={product.id}>
//        {product.name} - ${product.price}{''}
//        <button onClick={()=> onDelete(product.id)}>Delete</button>
//       </li>
//     })}
//   </ul>
// )
// function App() {
// const [products, setProducts] = useState([
//   {id:1, name: 'Product A' , price:30}
// ])

// const [totalExpense,setTotalExpense] = useState(
//   products.reduce((total,product) => total + product.price,0)
// )

// const handleDelete = (productId) => {
//   const updateProducts = products.filter(product => product.id !== productId);
//   const deketeProduct = products.find(product =>product.id === productId);
//   setProducts(updateProducts);
//   setTotalExpense(totalExpense - deketeProduct.price)
// }

//  const handleAddProduct = (newProduct) =>{
//   setProducts([...products,newProduct]);
//   setTotalExpense(totalExpense +  newProduct.price)
//  }
 
//   return (
//     <div className="App">
//       <h1>E-commerce</h1>
//       <ProductForm onAddProduct={handleAddProduct}/>
//       <ProductList products={products} onDelete={handleDelete}/>
//       <div>
//         <h2>Total Expense: ${totalExpense}</h2>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import ProductForm from './Component/inputForm';

const ProductList = ({ products, onDelete }) => (
  <ul>
    {products.map((product) => (
      <li key={product.id}>
        {product.name} - ${product.price}{' '}
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 30 }, // Fix the typo here
  ]);

  const [totalExpense, setTotalExpense] = useState(
    products.reduce((total, product) => total + product.price, 0)
  );

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    const deletedProduct = products.find((product) => product.id === productId);
    setProducts(updatedProducts);
    setTotalExpense(totalExpense - deletedProduct.price);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setTotalExpense(totalExpense + newProduct.price);
  };

  return (
    <div className="App">
      <h1>E-commerce</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDelete={handleDelete} />
      <div>
        <h2>Total Expense: ${totalExpense}</h2>
      </div>
    </div>
  );
}

export default App;

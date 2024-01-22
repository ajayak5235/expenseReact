import React,{useState} from 'react'

const ProductForm = ({onAddProduct})=>{
    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [sellingPrice, setSellingPrice] = useState('')

   const handleAddProduct = () =>{
    if(!productId || !productName || !sellingPrice){
        alert('Please fill in all fields')
        return;
    }

    const newProduct = {
        id:parseInt(productId),
        name: productName,
        price: parseFloat(sellingPrice)
    };

    onAddProduct(newProduct);
    setProductId('')
    setProductName('')
    setSellingPrice('');
   };

return (
    <div>
        <h1>Add Expense</h1>
       <label>
        ProductId:
        <input type="number" value={productId} onChange={(e)=> setProductId(e.target.value)}/>
       </label>
      <br></br>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
      </label>
      <br></br>
       <label>
        Selling Price:
        <input type="number" value={sellingPrice} onChange={(e)=> setSellingPrice(e.target.value)}/>
        </label>
        <br></br>
         <button onClick={handleAddProduct}>Add Product</button>
    </div>
)
}

export default  ProductForm;
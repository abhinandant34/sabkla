import React from 'react'
import "./UploadProduct.css"
import {Link} from "react-router-dom"
import { useState } from 'react'
import {db} from "./firebase";


function UploadProducts() {

    const [productname, setProductname] = useState('');
    const [productmrp, setMRP] = useState('');
    const [productprice, setprice] = useState('');
    const [productdescription, setdecription] = useState('');
    const [productcategory, setcategory] = useState({
        category:""
    });
    const [producttype, settype] = useState({
        type:""
    });

    const upload = e => {
        e.preventDefault();
         
               
        db.collection("Products").doc().set({
            Product_Name: productname,
            Product_MRP: productmrp,
            Product_Price: productprice,
            Product_Description: productdescription,
            Product_Category: productcategory,
            Product_Type: producttype,
            
        })
        .catch(error => alert(error.message))
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
     
        
    }

    return (
        <div className="uploadproduct">

            <Link to='/'>
            <img className="uploadproduct__logo" src="/images/hori_logo.png" />
       </Link>                      
       <div className="uploadproduct__container">
           <h1>Upload Details</h1>

           <form>
               <h5> Product Name</h5>
               <input type="text" value={productname} onChange={e=>setProductname(e.target.value)}/>
               <h5>MRP</h5>
               <input type="text" value={productmrp} onChange={e=>setMRP(e.target.value)}/>
               <h5>Price</h5>
               <input type="text" value={productprice} onChange={e=>setprice(e.target.value)}/>
               <h5>Images</h5>
               <input type="file" id="img" name="img" accept="image/*"/>
               <h5>Description</h5>
               <textarea value={productdescription} onChange={e=>setdecription(e.target.value)}/>
               <h5>Select Category</h5>
               <div className="uploadproduct__category">
               <input type="radio" name="category" value="men" onChange={e=>setcategory(e.target.value)}/>
                   <label for="men">Men</label>
                   </div>
                   <div className="uploadproduct__category">
                   <input type="radio"  name="category" value="woman" onChange={e=>setcategory(e.target.value)}/>
                   <label for="woman">Woman</label>
                   </div>

                   <div className="uploadproduct__category">
                   <input type="radio"  name="category" value="kids" onChange={e=>setcategory(e.target.value)}/>
                   <label for="kids">Kids</label>
                   </div>

                   <div className="uploadproduct__category">
                   <input type="radio"  name="category" value="other" onChange={e=>setcategory(e.target.value)}/>
                   <label for="other">Others</label>
                   </div>
                   <br/>

                   <h5> Select Type</h5>
                   <select  onChange={e=>settype(e.target.value)} >
                       <option  name="type" value="Clothing" >Clothing</option>
                       <option  name="type" value="Footwear">Footwear</option>
                       <option  name="type" value="Accessories" >Accessories</option>
                   </select>
                   
                   <br/>
                
                   <br/>
                               

                   <button onClick={upload} className="uploadproduct__Button">Upload Product</button>

           </form>

       </div>
            
        </div>
    )
}

export default UploadProducts

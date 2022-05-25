import React from 'react'
import {useParams} from 'react-router';
import {Book} from '../Components/Data';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addItem,delItem } from './redux/actions/index';

const BookDetails = () => { 
    const [cartBtn,setCartBtn]=useState("Add to Cart");
    const bookId=useParams();
    const bookDetail=Book.filter(x=>x.id ==bookId.id)
    const book =bookDetail[0];
    console.log(book);

    const dispatch=useDispatch();
    
    const handleCart=(book)=>{
        if(cartBtn==="Add to Cart"){
            dispatch(addItem(book))
            setCartBtn("Remove from Cart")
        
        }
        else{
            dispatch(delItem(book))
            setCartBtn("Add to Cart")
        }


    }



  return (
    <>
    <div className="container my-5 py-3">
        <div className="row ">
            <div className="col-md-6 d-flex justify-content-center mx-auto ">
                <img src={book.img} alt={book.title} height="400px"/>
       </div>
       <div className="col-md-6 d-flex flex-column justify-content-center">
           <h1 className='display-5 fw-bold'>{book.title}</h1>
           <hr />
           <h2 className='my-4'>{book.price}</h2>
           <p className='lead'>{book.desc}</p>
           <button onClick={()=>handleCart(book)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
       </div>
        </div>

    </div>

    </>
    )
}

export default BookDetails
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Book} from '../Components/Data';

const Books = () => {

    const cardItem=(item)=>{
      return(
      <>
      <div className="card my-4 py-4" key={item.id}  style={{width: "19rem"}}>
          <img src={item.img} className="card-img-top image-card" alt={item.title} height="400px"/>
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className='card-author'>{item.author}</p>
            <p className="price"><b>{item.price}</b></p>
            <NavLink to={`/books/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
          </div>
        </div>
      </>
      )
    }
  return (
  <>
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          {/* <h1>Books</h1> */}
          <hr />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-around">
        {Book.map(cardItem)}

      </div>
    </div>
    

  </>
    )
}

export default Books
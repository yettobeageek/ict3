import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";
const FavBtn = () => {
  const state=useSelector((state)=>state.addItem)
  return (
    <>
    <NavLink to='/cart' className="btn btn-outline-dark btn-sm ms-2">
        <span className='fa fa-shopping-cart'></span> Cart({state.length})
    </NavLink>
    </>
  )
}

export default FavBtn
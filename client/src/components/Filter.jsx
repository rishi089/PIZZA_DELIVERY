import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Navbar() {
  
    const dispatch=useDispatch()
    const [searchKey,setsearchKey]=useState('');
    const [category,setcategory]=useState('all');

    return(
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 ">
                     <input type="text" onChange={(e)=>{setsearchKey(e.target.value)}}   value={searchKey} className="form-control w-100" placeholder="Search Pizzas" />
                     
                </div>
                <div className="col-md-3 ">
                   <select className="form-control w-100 mt-2" onChange={(e)=>{setcategory(e.target.value)}}   value={category}>
                       <option value="all">All</option>
                       <option value="veg">Veg</option>
                       <option value="nonveg">Non-Veg</option>
                   </select>
                </div>
                <div className="col-md-3 ">
                     <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterPizzas(searchKey,category))}}>FILTER</button>
                </div>
            </div>
        </div>
    )



}


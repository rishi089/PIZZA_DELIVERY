import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import {deletePizza, getAllPizzas } from "../actions/pizzaActions";
import { Link } from "react-router-dom";

export default function Pizzaslist() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div>
            <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

            <ul className="adminfuntion">
              <li>
                <a href="/admin/userslist" style={{ color: "white" }}>
                  Users List
                </a>
              </li>
              <li>
                <a href="/admin/pizzaslist" style={{ color: "white" }}>
                  Pizzas List
                </a>
              </li>
              <li>
                <a href="/admin/addpizza" style={{ color: "white" }}>
                  Add New List
                </a>
              </li>
              <li>
                <a href="/admin/orderslist" style={{ color: "white" }}>
                  Orders List
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Pizzas List</h2>

            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}

            <table className="table table-bordered">
                <thead className='thead-dark'>
                  <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
          <tbody>
          {pizzas && pizzas.map(pizza=>{
            return <tr>
              <td>{pizza.name}</td>
              <td>
                Small : {pizza.prices[0]['Small']}<br/>
                Medium : {pizza.prices[0]['Medium']}<br/>
                Large : {pizza.prices[0]['Large']}
                </td>
              <td>{pizza.category}</td>
              <td>
                <i className='fa fa-trash m-2' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-2'></i></Link>
                </td>
              

            </tr>
          })}
          </tbody>

            </table>

            
          </div>
        </div>
      </div>
    </div>
  );
}

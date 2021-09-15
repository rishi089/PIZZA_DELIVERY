import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { getAllOrders } from "../actions/orderActions";
import { deliverOrder } from "../actions/orderActions";

export default function Orderslist() {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);

  const {orders, error, loading } = getordersstate;
  
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
         <div><h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

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
          
          {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}
        <table className='table table-striped table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th>Order Id</th>
              <th>Email</th>
              <th>User Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders&&orders.map(order=>{
              return <tr>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0,10)}</td>
                <td>
                   {order.isDelivered?(<h1>Delivered</h1>):(<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}


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

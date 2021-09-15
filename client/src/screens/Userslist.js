import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { deleteUser, getAllUsers } from "../actions/userActions";
export default function Userslist(){
  const dispatch = useDispatch(); 
  const usersstate = useSelector((state) => state.getAllUsersReducer);

  const { users, error, loading } = usersstate;


  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  
  
  return(
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
          <h1>Users list</h1>
          {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}
            <table className='table table-striped table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users&&users.map(user=>{
                  return <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><i className="fa fa-trash" onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
}
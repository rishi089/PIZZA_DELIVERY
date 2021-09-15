
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Pizzaslist from "./Pizzaslist";
import Addpizza from "./Addpizza";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { deleteUser, getAllUsers } from "../actions/userActions";
import {BrowserRouter , Route , Link , Switch} from 'react-router-dom'

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../../src/index.css";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const usersstate = useSelector((state) => state.getAllUsersReducer);

  const { users, error, loading } = usersstate;
  const dispatch = useDispatch();

  currentUser.isAdmin = !currentUser.isAdmin;
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
         <div> <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

          <ul className='adminfuntion'>
            <li>
              <Link to={"/admin/userslist"} style={{color:'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={"/admin/pizzaslist"} style={{color:'white'}}>Pizzas List</Link>
            </li>
            <li>
            <Link to={"/admin/addpizza"} style={{color:'white'}}>Add New List</Link>
            </li>
            <li>
            <Link to={"/admin/orderslist"} style={{color:'white'}}>Orders List</Link>
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
  );
}
       
     
      




import React, { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate=useSelector(state=>state.registerUserReducer);
  const {error,loading,success}=registerstate;

  const dispatch=useDispatch();
 function register(){
     if(password!=cpassword){
         alert("Password and Confirm password do not match")
     }else{
         const user={
             name,
             email,
             password
         }
         console.log(user);
         dispatch(registerUser(user))
     }
 }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
        
        {loading&&(<Loading/>)}
        {success&&(<Success success='User Registered Successfully'/>)}
        {error&&(<Error error='Email already registered'/>)}
        
        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
          Register  <i class="fa fa-user-plus" aria-hidden="true"></i>
        </h2>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            className="form-control"
            value={password}
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="form-control"
            value={cpassword}
            required
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
          <button className="btn mt-3 mb-3" onClick={()=>register()}>REGISTER</button>
          <br/>
          <a style={{color: 'black'}} href="/login"  className="mt-2">Click Here To Login</a>
        </div>
      </div>
    </div>
  );
}

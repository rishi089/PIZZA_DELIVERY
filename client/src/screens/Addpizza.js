import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Loading  from "../components/Loading";
import Error from '../components/Error';
import Success from "../components/Success"

export default function Addpizza() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const dispatch = useDispatch();
  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;
function formHandler(e){
  e.preventDefault();
  const pizza={
    name,
    image,
    description,
    category,
    prices:{
      Small: smallprice,
      Medium: mediumprice,
      Large: largeprice
    }
  }
  console.log(pizza);
  dispatch(addPizza(pizza));
 

}


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
          <div >
            <h1>Add Pizza</h1>

            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}

            {success && (<Success success="New Pizza added successfully" />)}

            <form onSubmit={formHandler}>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Small Varient Price"
                value={smallprice}
                onChange={(e) => {
                  setsmallprice(e.target.value);
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Medium Varient Price"
                value={mediumprice}
                onChange={(e) => {
                  setmediumprice(e.target.value);
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Large Varient Price"
                value={largeprice}
                onChange={(e) => {
                  setlargeprice(e.target.value);
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => {
                  setimage(e.target.value);
                }}
              />
              <button className='btn m-3' type='submit'>Add Pizza</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { editPizzaReducer } from "../reducers/pizzaReducers";

export default function Editpizza({ match }) {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getpizzabyidstate;
  const editpizzastate = useSelector((state) => state.editPizzaReducer);
  const {editloading,editerror,editsuccess}=editpizzastate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (pizza) {
      if (pizza._id == match.params.pizzaid) {
       
        setname(pizza.name);
        setdescription(pizza.description);
        setcategory(pizza.category);
        setsmallprice(pizza.prices[0]["Small"]);
        setmediumprice(pizza.prices[0]["Medium"]);
        setlargeprice(pizza.prices[0]["Large"]);
        setimage(pizza.image);

        
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);

  function formHandler(e) {
    e.preventDefault();
    const editedpizza = {
        _id: match.params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        Small: smallprice,
        Medium: mediumprice,
        Large: largeprice,
      },
    };
   dispatch(editPizza(editedpizza))
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

          <div>
            <h1>Edit Pizza</h1>

            <div>
              {loading && <Loading />}
              {error && <Error error="Something went wrong" />}
              {editsuccess && <Success success="Pizza details edited successfully" />}
              {editloading && <Loading />}
              {editerror && <Error error="Something went wrong" />}

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
                <button className="btn m-3" type="submit">
                  Edit Pizza
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

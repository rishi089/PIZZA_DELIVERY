import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const {error,loading,success}=orderstate;
  
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading&&(<Loading/>)}
      {error&&(<Error error='Something went wrong'/>)}
        {success&&(<Success success='Your Order Placed Successfully'/>)}
        
        <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51JQ4OVSIkq4pQ5S9FlfFMY5tpztma3wjZbiSrgfV6MKmTEHQGvLUawA7YJFpPTbC1HAypbcQ2XZX1CBpJlJ4eLIE00ueWZr36P"
        currency="INR"
      >
        <button className="btn"> Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
   

      
import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const noOfCarts = useSelector((store) => store.cart);

  return <>Cart {noOfCarts}</>;
};

export default Cart;

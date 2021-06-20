import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";
import configData from "../config.json";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    //console.log("CHECKOUT", state);

    const payload = {
      products: [],
      info: {
        appid: 1,
        userId: 1,
        deliveryAddress: "Rua das Batatas",
        deliverInPerson: true,
        latitude: 50,
        longitude: 50
      },
    };

    for (var i = 0; i < state.cartItems.length; i++) {
      var product_obj = state.cartItems[i];
      var id = product_obj["id"];
      var quantity = product_obj["quantity"];
      payload.products.push({"id":id,"quantity":quantity});
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(payload)
    };

    const url_post_order = configData.ENGINE_ENDPOINT + payload.info.userId + '/order/register?appid=' + payload.info.appid;

    fetch(url_post_order, requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.code == 201){
                dispatch({ type: "CHECKOUT_201", msg : "" });
            } else {
                dispatch({ type: "CHECKOUT_403", msg : data.message});
            }
        });

    
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

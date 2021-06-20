import React, {useContext} from 'react';
import Layout from '../../components/Layout';
import CartProducts from "../cart/CartProducts";
import {Link} from "react-router-dom";
import {formatNumber} from "../../helpers/utils";
import CartItem from "../cart/CartItem";
import {CartContext} from "../../contexts/CartContext";

const Orders = () => {
    
    var obj;
    var orderItems;

    fetch("http://localhost:8081/clientApi/1/orders?appid=1")
        .then(res => res.json())
        .then(data => obj = data)
        .then(() => console.log(obj))

    console.log(orderItems);
    return (
        <Layout title="About" description="This is the Orders page">
            <div className="text-center mt-5">
                <h1>Orders</h1>
                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            orderItems.map(product => <CartItem key={product.id} product={product}/>)
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Orders;
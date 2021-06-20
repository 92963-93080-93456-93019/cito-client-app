import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'

import { formatNumber } from '../../helpers/utils';

const OrderItem = ({order}) => {
    //clientApi/1/orders?appid=1
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{formatNumber(order.price)}</h5>
                <p className="mb-1">BRUFEN</p>
                <p className="mb-1">BRUFEN</p>
                <p className="mb-1">BRUFEN</p>
                <p className="mb-1">BRUFEN</p>
                <p className="mb-1">BRUFEN</p>
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {order.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                <p className="mb-0">Qty: {order.status}</p>
            </div>
        </div>
     );
}
export default OrderItem;
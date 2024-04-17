import {  OrderItem } from "../types";
import { formatCurrency } from "../helpers/index";
import { OrderActions } from "../reducers/orderReducers";
import { Dispatch } from "react";

type OrdercontentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>
};

export default function OrderContents({ order,dispatch }: OrdercontentsProps) {
  return (
    <div>
      <h2 className="font-black text-center text-4xl">Pedido</h2>
      <div className="space-y-3 mt-10">
        {
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-500 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-2xl">{item.name}</p>
                <p>Precio unidad: {formatCurrency(item.price)} </p>
                <p>
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8  rounded-full text-white font-black"
                onClick={() => dispatch({type: "removeItem", payload: {id:item.id}})}
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

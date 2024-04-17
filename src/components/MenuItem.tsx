import { OrderActions } from "../reducers/orderReducers";
import type { MenuItem } from "../types";
import { Dispatch } from 'react';

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>
};
export default function MenuItem({ item,dispatch }: MenuItemProps) {
  return (
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-100"
    onClick={()=>dispatch({type : "addItem", payload: {item}})}>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}

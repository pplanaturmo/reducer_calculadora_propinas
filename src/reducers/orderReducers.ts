import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | {
      type: "addItem";
      payload: { item: MenuItem };
    }
  | {
      type: "removeItem";
      payload: { id: MenuItem["id"] };
    }
  | {
      type: "placeOrder";
    }
  | {
      type: "addTip";
      payload: { value: number };
    };

    export type OrderState = {
        order: OrderItem[],
        tip: number
    }

    export const initialState : OrderState = {
        order: [],
        tip: -1,
    }

    export const orderReducer = (
        state : OrderState = initialState,
        action : OrderActions
    ) =>  {

        let updatedOrder:OrderItem[] = []; 

        switch (action.type) {
            case "addItem":
                const itemExists = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
                if (itemExists) {
                   updatedOrder = state.order.map((orderItem) =>
                    orderItem.id === action.payload.item.id
                      ? { ...orderItem, quantity: orderItem.quantity + 1 }
                      : orderItem
                  );
                } else {
                  const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
                  updatedOrder = [...state.order, newItem]
                }
                return {
                    ...state,
                    order: updatedOrder
                }
                break;

                case "removeItem":

                updatedOrder = state.order.filter((dish) => dish.id !== action.payload.id)

                    return {
                        ...state,
                        order: updatedOrder
                    }
                break;
                case "addTip":
                    const tip = action.payload.value
                    
                    
                    return {
                        ...state,
                        tip
                    }
                break;
                break;
                case "placeOrder":
                    


                    return {
                        ...state,
                        order : [],
                        tip : 0,
                    }
                break;
        

                default:
                
                    return state
                break;
        }
        
    }
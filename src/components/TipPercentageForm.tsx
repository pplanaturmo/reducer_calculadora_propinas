import { Dispatch } from "react";
import { OrderActions } from "../reducers/orderReducers";

type TipPercentageFormsProps = {
  dispatch: Dispatch<OrderActions>,
  tip: number;
};

const tipOptions = [
 
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm({ dispatch,tip }: TipPercentageFormsProps) {
  return (
    <div>
      <h3 className="font-black text-2xl"></h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-3">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={(element) => dispatch({type:"addTip", payload : {value: +element.target.value}})}
              checked={tipOption.value === tip}
            ></input>
          </div>
        ))}
      </form>
    </div>
  );
}

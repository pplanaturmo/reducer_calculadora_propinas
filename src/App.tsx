import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { useReducer } from 'react';
import { initialState, orderReducer } from "./reducers/orderReducers";

function App() {


  const [state,dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-teal-300 py-5">
        <h1 className="text-center text-4xl">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-14 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-center text-4xl font-black">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentageForm dispatch={dispatch} tip={state.tip} />
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
            </>
          ) : (
            <p className="text-center w-full bg-slate-200 p-3 uppercase text-black font-bold mt-10">El pedido esta vacio</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

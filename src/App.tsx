import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/Features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center border ">
      <div className="flex border-purple-600 rounded-md bg-slate-200 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 mr-2 text-xl font-sm text-white"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-sm text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-sm text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

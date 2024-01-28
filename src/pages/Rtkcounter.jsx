// src/RtkCounter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../stores/counterSlice";
import { increment, decrement } from "../stores/counterSlice2";

function RtkCounter() {
  //  dispatch untuk reducernya
  // selector untuk state awalnya
  const dispatch = useDispatch();
  // pembedanya disini counter2.value
  const counter2 = useSelector((state) => state.counter2.value);

  return (
    <div className="w-full max-w-xs h-60  m-4 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <h1>Redux Toolkit Example for Counter</h1>
      <p>Counter: {counter2}</p>
      <p>Counter: {counter2}</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default RtkCounter;

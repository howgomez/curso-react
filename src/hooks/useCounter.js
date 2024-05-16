import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementar = (value) => setCounter(counter + value);

  const decrementar = (value) => {
      if(counter <= 0) return
      setCounter(counter - value);
  }
  const reset = () => setCounter(initialValue);

  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};

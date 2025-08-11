import { useState } from "react";

export default function useCounter(initialCount = 0, numberCount = 1) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + numberCount);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - numberCount);
  };

  const handleResetCounter = () => {
    setCount(initialCount);
  };

  return { count, handleIncrement, handleDecrement, handleResetCounter };
}

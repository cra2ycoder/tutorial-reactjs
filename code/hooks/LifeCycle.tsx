import { useEffect, useState } from "react";

/**
 * @description
 * componentDidMount() with Hooks
 */
export function CDMLifeCycle() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    setState("Component Mounted!");
  }, []);

  return <div>{state}</div>;
}

/**
 * @description
 * componentDidUpdate() with Hooks
 */
export function CDULifeCycle() {
  const [count, setCount] = useState<number>(0);
  const [state, setState] = useState<string>("initial");

  const doIncrement = () => {
    setCount(count + 1);
  };

  const doDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count >= 5) {
      setState("max limit reached!");
    } else if (count < 0) {
      setState("min limit should be 0");
    } else {
      setState("value accepted");
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <p>state: {state}</p>
      <button onClick={doIncrement}>+</button>
      <button onClick={doDecrement}>-</button>
    </>
  );
}

function TestComponent() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    return () => {
      console.log({ state });
      setState("TestComponent unmount!");
    };
  });

  useEffect(() => {
    setState("TestComponent mounted!");
  }, []);

  return <div>{state}</div>;
}

/**
 * @description
 * componentWillUnMount() with Hooks
 */

export function CWUMLifeCycle() {
  const [shouldRemove, setShouldRemove] = useState<boolean>(false);
  const toggleComponent = () => {
    setShouldRemove(!shouldRemove);
  };

  return (
    <>
      {shouldRemove === false && <TestComponent />}
      <button onClick={toggleComponent}>toggle component</button>
    </>
  );
}

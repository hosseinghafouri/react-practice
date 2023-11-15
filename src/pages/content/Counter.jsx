import { useCounter } from "../../hooks/useCounter";

function Counter(params) {
    const [count, increas,decrease, reset] = useCounter();
  return (
    <div className="Counter">
          <button onClick={increas}>increat</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={reset}>set to 0</button>
          <h1>{count}</h1>
    </div>
  );
}
export default Counter;

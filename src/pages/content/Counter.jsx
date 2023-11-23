import { useSelector } from "react-redux";
import { useCounter } from "../../hooks/useCounter";

function Counter(params) {
    const [count, increas,decrease, reset] = useCounter();
    const selector = useSelector((state) => state.user);
  return (
    <div className="Counter">
      <h1>name of user: {selector.username}</h1>
          <button onClick={increas}>increat</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={reset}>set to 0</button>
          <h1>{count}</h1>
    </div>
  );
}
export default Counter;

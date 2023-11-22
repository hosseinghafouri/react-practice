import Axios from "axios";
import { useReducer } from "react";
import { ACTION_TYPES } from "../actions/factActions";

const initialState = {
  loading: false,
  fact: "",
  error: false,
};

const factReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.fetch_start:
      return { loading: true, fact: "", error: false };
    case ACTION_TYPES.fetch_succes:
      return { loading: false, fact: action.data, error: false };
    case ACTION_TYPES.fetch_error:
      return { loading: false, fact: "", error: true };

    default:
      return state;
  }
};

function Fact(params) {
  const [state, despatch] = useReducer(factReducer, initialState);

  const handleFetch = () => {
    despatch({ type: ACTION_TYPES.fetch_start });
    Axios.get(`https://catfact.ninja/fact`)
      .then((res) =>
        despatch({ type: ACTION_TYPES.fetch_succes, data: res.data.fact })
      )
      .catch(() => despatch({ type: ACTION_TYPES.fetch_error }));
  };
  return (
    <div className="FactReducer">
      <button onClick={handleFetch}>
        {state.loading ? "is loading" : "Get New Fact"}
      </button>
      {state.error && <p>Error Some thing is wrong</p>}
      {state.fact && <p style={{ fontWeight: "bolder" }}>{state.fact}</p>}
    </div>
  );
}
export default Fact;

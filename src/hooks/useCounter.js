import { useState } from "react";

export const useCounter = (intialValue = 0) => {
    const [state, setState] = useState(intialValue);

    function increas() {
        setState(state + 1);
      }
      function decrease() {
        if (state > 0) {
            setState(state - 1);
        }
        
      }
      function reset() {
        setState(0);
      }

    return [state, increas, decrease, reset]
}
import { useState } from "react";

export function useToggle(intialValue = false) {
  const [state, setState] = useState(intialValue);

  const toggle = ()=> {
    setState((prev) => !prev);
  }
  return [state, toggle]
    
}
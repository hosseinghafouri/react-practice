import { useState } from "react";
import { login, logout } from "../../components/Store";
import { useDispatch, useSelector } from "react-redux";

function Login(params) {
    const [newUsername, setUsername] = useState("");
    const dispatch = useDispatch();
    const selector = useSelector((state)=> state.user);
    console.log(selector);
  return (
    <div className="Login">
      <h1>Login | {selector.username}</h1>
      <input type="text" onChange={(e)=> setUsername(e.target.value)} />
      <button onClick={()=> dispatch(login({username: newUsername}))}>login</button>
      <button onClick={()=> dispatch(logout())}>logout</button>
    </div>
  );
}

export default Login;

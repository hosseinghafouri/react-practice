import { useState, useContext } from "react";
import { profileContext } from "../App";


function ChangeProfile(props) {
    const [newUsername, setNewUsername] = useState("");
    const {setUsername} = useContext(profileContext);
    function changeUserName() {
        setUsername(newUsername);
    }
    return(
        <div className="ChangeProfile">
            <input type="text" onChange={(e)=> setNewUsername(e.target.value)} />
            <button onClick={changeUserName}>Change Username</button>
        </div>
    );
}
export default ChangeProfile;
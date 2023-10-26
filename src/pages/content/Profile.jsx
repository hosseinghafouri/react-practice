import { useParams } from "react-router-dom";
import ChangeProfile from "../../components/ChangeProfile";

import { useContext } from "react";
import { profileContext } from "../../App";

function Profile(props) {
    let { name, id } = useParams();
    const {username} = useContext(profileContext);
    return (
        <div className="Profile">
            <h1>Profile {name} {id} - username: {username}</h1>
            <ChangeProfile />
        </div>
    )
}
export default Profile;
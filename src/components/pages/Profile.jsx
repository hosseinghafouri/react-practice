import { useParams } from "react-router-dom";
function Profile(params) {
    const {name ,id} = useParams();
    return (
        <div className="Profile">
            <h1>Profile of {name} {id}</h1>
        </div>
    )
}
export default Profile;
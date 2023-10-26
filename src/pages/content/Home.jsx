import { useContext } from "react";
import { profileContext } from "../../App";
function Home(props) {
    const {username} = useContext(profileContext);
    return (
        <div className="Home">
            
            <h1>Home - username: {username}</h1>
        </div>
    )
}
export default Home;
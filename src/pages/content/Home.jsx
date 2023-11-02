import { useContext } from "react";
import { useQuery } from "react-query";
import Axios from 'axios'
import { profileContext } from "../../App";
function Home(props) {
  const {data :catData, isLoading, isError, error, refetch} = useQuery(["cat"], () => {
    return Axios.get(`https://catfact.ninja/fact`).then((res) => res.data)
  });

  const { username } = useContext(profileContext);
  if (isLoading) return <h2>is loading  ...</h2>;
  if (isError) return <h2>is error  ... {error.message}</h2>;

  return (
    
    <div className="Home">
      <h1>Home - username: {username}</h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update</button>
    </div>
  );
}
export default Home;

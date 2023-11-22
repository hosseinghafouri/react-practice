import { useContext } from "react";
import { profileContext } from "../../App";
import { useCatFacts } from "../../hooks/useCatFacts";
import Fact from "../../components/Fact";
import Form from "../../components/Form";
function Home(props) {
  const {
    data: catData,
    isLoading,
    isError,
    error,
    refetchData,
  } = useCatFacts();

  const { username } = useContext(profileContext);
  if (isLoading) return <h2>is loading ...</h2>;
  if (isError) return <h2>is error ... {error.message}</h2>;

  return (
    <div className="Home">
      <h1>Home - username: {username}</h1>
      <p>{catData?.fact}</p>
      <button onClick={refetchData}>Update</button>
      <hr />
      <hr />
      <hr />

      {/* hook reducer example 1 */}
      <Fact />
      <hr />
      <hr />
      <hr />
      {/* hook reducer example 1 */}
      <Form />
    </div>
  );
}
export default Home;

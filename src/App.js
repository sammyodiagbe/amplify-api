import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

function App() {
  // useEffect(() => {

  // }, [])
  const getApi = async () => {
    const data = await API.get("todos", "/todos");
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calling api, using rest </h1>
        <hr />
        <button onClick={getApi}>call backend api right now</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

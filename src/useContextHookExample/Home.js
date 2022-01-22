import { useContext } from "react";
import { LoginContext } from "../helper/Context";

function Home() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>You are on home page</h1>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default Home;

import { useContext } from "react";
import { LoginContext } from "../helper/Context";

function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div style={{ border: "2px solid red" }}>
      <h1>This is login Page</h1>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      {loggedIn ? <h1>You are logged In</h1> : <h1>You are Not logged In</h1>}
    </div>
  );
}

export default Login;

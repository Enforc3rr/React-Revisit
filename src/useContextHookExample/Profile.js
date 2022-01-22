import { useContext } from "react";
import { LoginContext } from "../helper/Context";

function Profile() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>This Is Profile Page</h1>
      {loggedIn ? "Logged In " : "Not Logged In"}
    </div>
  );
}

export default Profile;

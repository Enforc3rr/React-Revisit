import { useNavigate } from "react-router-dom";

function Auth({ authenticate }) {
  const navigate = useNavigate();
  const authFunc = () => {
    authenticate();
    navigate("profile");
  };
  return (
    <div>
      <h2>Please Authenticate To Continue</h2>
      <button onClick={authFunc}>LOGIN</button>
    </div>
  );
}

export default Auth;

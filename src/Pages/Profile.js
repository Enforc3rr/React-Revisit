import { Link } from "react-router-dom";
function Profile({ logout }) {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Logged In</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;

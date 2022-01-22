import { useEffect, useState } from "react";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");
    console.log(u);
    console.log(JSON.parse(u));
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  /*
    It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false
    */
  return (
    <Routes>
      {/* here , (!user : false) this condition is true right ? so , It will ev  */}
      {!user && (
        <Route
          path="/auth"
          element={<Auth authenticate={() => setUser(true)} />}
        />
      )}
      {user && (
        <>
          <Route
            path="/profile"
            element={<Profile logout={() => setUser(false)} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      )}
      <Route path="*" element={<Navigate to={user ? "/profile" : "/auth"} />} />
    </Routes>
  );
}

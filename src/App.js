import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { LoginContext } from "./helper/Context";
import Home from "./useContextHookExample/Home";
import Login from "./useContextHookExample/Login";
import Profile from "./useContextHookExample/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Remember useEffect Hook gets executed in order .....!!!

  useEffect(() => {
    const user = localStorage.getItem("users");
    console.log(JSON.parse(user));
    user && JSON.parse(user) ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  useEffect(() => {
    console.log("logged in state changed " + loggedIn);
    localStorage.setItem("users", loggedIn);
  }, [loggedIn]);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div
        style={{
          border: "6px solid black",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Routes>
          {!loggedIn && <Route path="/login" element={<Login />} />}

          {loggedIn && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Home />} />
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={loggedIn ? "/profile" : "/login"} />}
          />
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;

/*
<div>
        <h1>Hello</h1>

        <Route path="/todo">
          <Todo />
        </Route>
      </div>
*/

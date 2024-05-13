import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { MainMenu } from "./pages/MainMenu";
import Add from "./pages/Add";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        {loggedIn && (
          <>
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/add-student" element={<Add/>}/>
          </>
        )}
        {!loggedIn && (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

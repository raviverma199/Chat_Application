import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/Login" />} />
        <Route
          path="/Login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/Signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

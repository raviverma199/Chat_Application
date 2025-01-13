import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const Success = HandleInputErrors({
      username,
      password,
    });
    if (!Success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const HandleInputErrors = ({ username, password }) => {
  try {
    if (!username || !password) {
      toast.error("Please Fill In All Fields");
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};

export default UserLogin;

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ fullname, username, password, gender }) => {
    const Success = HandleInputErrors({
      fullname,
      username,
      password,
      gender,
    });
    if (!Success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, username, password, gender }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      // update context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

const HandleInputErrors = ({ fullname, username, password, gender }) => {
  try {
    if (!fullname || !username || !password || !gender) {
      toast.error("Please Fill In All Fields");
      return false;
    }
    if (password.length < 8) {
      toast.error("Password Must Be At Least 8 Character");
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
  }
};

// custom hooks => untuk bisa digunakan berkali kali

import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  // decode token
  useEffect(() => {
    const token = localStorage.getItem("token"); // menangkap value dari local storage
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};

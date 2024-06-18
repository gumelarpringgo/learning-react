import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  // menangkap error input login
  const [loginFailed, setLoginFailed] = useState("");

  // dikirim sebagai props
  const handleLogin = (event) => {
    event.preventDefault(); // agar tidak melakukan reload
    // localStorage.setItem("email", event.target.email.value); // menangkap data dari input submit ke local storage
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products"; // langsung redirect ke url
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        // console.log(data);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="gumelar"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button classname="w-full bg-blue-600" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="mt-5 text-center text-red-500 ">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;

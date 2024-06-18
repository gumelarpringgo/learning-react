import { useEffect, useState, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600 ">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center p-2 ml-5 mr-5 bg-gray-800 rounded-md">
        Item : {totalCart} | Price : ${total}
      </div>
      <Button
        className="px-10 mx-5 text-white bg-black rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;

// Pemanggilan nested component

import { Fragment, useEffect, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
// import Button from "../components/Elements/Button";
// import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service.";
// import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

// menggunakan data rendering lists => bersifat jamak/array
// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo
//           porro hic perferendis quos sit distinctio culpa optio harum sed
//           voluptatibus possimus nobis quisquam nisi ab, dolorem dolor! Vel,
//           totam?`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 2000000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo
//           porro hic perferendis quos sit distinctio culpa optio harum sed.`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Bekas",
//     price: 1500000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo
//           porro hic perferendis quos sit distinctio culpa optio harum sed. quos sit distinctio culpa optio harum sed.`,
//   },
//   {
//     id: 4,
//     name: "Sepatu Addi",
//     price: 1250000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo
//           porro hic perferendis quos sit distinctiom sed.`,
//   },
// ];

// const token = localStorage.getItem("token"); // menangkap value dari local storage

const ProductsPage = () => {
  //useContext
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);

  // const [cart, setCart] = useState([]); // memiliki state (cart) dan updater state (setCart) dan bisa menyimpan nilai default pada useState
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  // const username = useLogin();
  useLogin();

  // // lifecycle pada stateless component
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []); // sama seperti componentDidMount
  // }, []); // terdapat dependency untuk fungsi componentDidUpdate

  // memanggil data fakeStoreAPI
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((accumulator, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return accumulator + product.price * item.qty;
  //     }, 0); // melakukan proses componentDidUpdate
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]); // melihat perubahan dependency pada cart

  // // useReff
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   // localStorage.removeItem("password");
  //   window.location.href = "/login";
  // };

  // const handleAddToCart = (id) => {
  //   // setCart([
  //   //   // ...cart => memasukkan data lama tUnmountinganpa menimpa
  //   //   ...cart,
  //   //   {
  //   //     id,
  //   //     qty: 1,
  //   //   },
  //   // ]);
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       // melakukan kondisi jika product yang dimasukkan sama maka hanya menambahkan quantity saja
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else setCart([...cart, { id, qty: 1 }]);
  // };

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="flex flex-wrap w-4/6 ">
          {/* Literasi dari products/jamak => menjadi product/singular */}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="mb-2 ml-5 text-3xl font-bold text-blue-600 ">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>{item.id}</li>
            ))}
          </ul> */}
          <TableCart products={products} />
        </div>
      </div>

      {/* <div className="flex justify-center w-100 "> // belajar saat menggunakan statefull component
        <Counter />
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;

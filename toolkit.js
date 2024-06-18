import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;

// CREATE ACTION
const addToCart = createAction("ADDRT");

// tidak mmemisahkan inital state
// const cartReducer = createReducer({
//   cart: [],
// });

// atau memisahkan initial state
// const initialState = {
//   cart: [],
// };

// REDUCER
const cartReducer = createReducer([], (builder) => {
  // terdapat array kosong untuk menampung banyak initialstate
  // konsep acction
  builder.addCase(addToCart, (state, action) => {
    //   state.cart = [...state.cart, action.payload]; // atau
    // state.cart.push(action.payload); // menggunakan satu state

    //multi state
    state.push(action.payload);
  });
});

// Menambahkan reducer baru
const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// STORE
const store = configureStore({
  // kalau banyak reducer
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
  // reducer: cartReducer, // kalau menggunakan satu reducer
});

console.log("oncreate store: ", store.getState());

// subscribe => untuk melihat perubahan pada state
store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});

// bisa menggunakan manual
// const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 30 } };
// store.dispatch(action2);

// memanggil menggunakan create action toolkit
const action1 = addToCart({ id: 1, qty: 3 });
store.dispatch(action1);
const action2 = addToCart({ id: 2, qty: 4 });
store.dispatch(action2);

// mengubah state login
store.dispatch(login());

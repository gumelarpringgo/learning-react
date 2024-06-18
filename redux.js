// payload = datanya
// type = nama fungsinya

import { legacy_createStore } from "redux";
// reducer

const cartReducer = (
  state = {
    // login: false,
    cart: [
      {
        id: 1,
        qty: 20,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART": //nama fungsinya
      return {
        ...state, // memasukkan yang ada di state sebelumnya
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store / wadah state
const store = legacy_createStore(cartReducer); // createStore sudah tidak digunakan => direkomendasikan menggunakan configureStore pada redux toolkit
console.log("oncreate store : ", store.getState());

// subscribe => untuk melihat perubahan pada state
store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});
// dispatch / perubahan dari acsi dan datanya
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 30 } };
store.dispatch(action2);

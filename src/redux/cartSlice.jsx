import { createSlice } from "@reduxjs/toolkit";

let items =
  JSON.parse(localStorage.getItem("cart")) !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
let totalQuantity =
  JSON.parse(localStorage.getItem("totalQuantity")) !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

    // let numberQuantity = 0
    // items.forEach(element => {
    //   numberQuantity += element.quantity
    // });

let initialState = {
  cartItems: items,
  // totalQuantity: totalQuantity,
  totalQuantity: items.reduce((total , product)=> total + product.quantity , 0) ,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // console.log('====>store ==>',action.payload)
      // state.cartItems.push(newItem)
      const existingItem = state.cartItems.find(
        (item) => item.id == newItem._id
      );
      // state.cartItems = [...state.cartItems,newItem ]
      // localStorage.setItem('cart',JSON.stringify(state.cartItems))

      // state.totalQuantity++;
      state.totalQuantity = state.cartItems.reduce((total , product)=> total + product.quantity , 0)


      if (!existingItem) {
        state.cartItems.push({
          id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          description: newItem.description,
          category: newItem.category,
          quantityProduct: newItem.quantity,
          quantity: 1,
        });
        // state.cartItems = [...state.cartItems,newItem ]
        // state.cartItems = [{...state.cartItems,quantity : 1},newItem ]
      } else {
        existingItem.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
    },
    decrement: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if(existingItem.quantity > 1){
        existingItem.quantity--;
        state.totalQuantity--;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    increment: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
        existingItem.quantity++;
        state.totalQuantity++;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      
    },
    removeItem : (state ,action)=>{
      const newItem = action.payload;
      state.cartItems = state.cartItems.filter(product => product.id != newItem)
      state.totalQuantity = state.cartItems.reduce((total , product)=> total + product.quantity , 0)
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    emptyCartItems : (state , action)=>{
      state.cartItems = []
      state.totalQuantity = 0
    }
  },
});

export const { addToCart, decrement, increment,removeItem ,emptyCartItems} = cartSlice.actions;
export default cartSlice.reducer;

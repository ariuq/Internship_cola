import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get('cart') ?
{ ...JSON.parse(Cookies.get('cart')), loading: true, showSidebar: false}
: {
    loading: true,
    showSidebar: false,
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.id === item.id)
            
            if(existItem) {
                state.cartItems = state.cartItems.map((x) =>
                x.id == existItem.id ? item : x)
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            state.itemsPrice = state.cartItems.reduce((acc, item) => acc+ 15654 * item.qty, 0)
            state. shippingPrice = state.itemsPrice > 50000 ? 0:false
            state.totalPrice = (
                Number(state.itemsPrice)
            )
            Cookies.set('cart', JSON.stringify(state))
         },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
            state.itemsPrice = state.cartItems.reduce((acc, item) => acc+ 15654 * item.qty, 0)
            state. shippingPrice = state.itemsPrice > 50000 ? 0:false
            state.totalPrice = (
                Number(state.itemsPrice)
            )
            Cookies.set('cart', JSON.stringify(state))
        },
        hideLoading: (state) => {
            state.loading = false
        },
    },
})
export const {addToCart, removeFromCart, hideLoading} = cartSlice.actions
export default cartSlice.reducer

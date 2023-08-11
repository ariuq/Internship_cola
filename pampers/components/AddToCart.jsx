'use client'
import React, { useState } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { useRouter } from 'next/navigation'
import { addToCart } from '@redux/slices/cartSlice'


 
 const AddToCart = ({
    product,
    showQty = true,
    redirect = false,
    increasePerClick = false,
    children
 }) => {
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart)
    const router = useRouter()
    const [qty, setQty] = useState(1)
    const addToCartHandler = () => {
        let newQty = qty;
        if (increasePerClick) {
            const existItem = cartItems.find((x) => x.id === product.id)
            if(existItem){
                newQty = existItem.qty+1
    }
}
    dispatch(addToCart({...product, qty: newQty}))
    if(redirect) router.push('/cart')
}
       return (
     <>
     {showQty && (
            <div>Qty</div>
     )}
             <button onClick={addToCartHandler}>
                {children}
            </button> 
     </>
   )
 }
 
 export default AddToCart
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/redux/slices/cartSlice';

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick=0,
  children
}) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
 

  const existItem = cartItems.find((x) => x.id === product.id);
  const existingQty = existItem ? existItem.qty : 0;

  const addToCartHandler = () => {
    let newQty = existingQty;
    if (increasePerClick && existItem) {
      if(increasePerClick==-1) {
        if(existingQty > 0) {
            console.log(existItem)
            newQty = existingQty + increasePerClick ;
        } else {
            newQty = existingQty + 0;
        }
      } else {
        newQty = existingQty + increasePerClick ;
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));

    if (redirect) router.push('/cart');
  };


  return (
    <>
  
      {showQty && (
        <div className="mx-2">{existingQty}</div>
      )}
      <button onClick={addToCartHandler}>{children}</button>
    </>
  );
}

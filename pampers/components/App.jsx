'use client';

import DiaperCalculator from "@app/products/components/DiaperCalculator";
import Footer from "./Footer/Footer";
import Nav from "./Navbar/Nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideLoading } from "@redux/slices/cartSlice";

const App = ({children}) => {

    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])
  return (
    <div>
        <Nav/>
        <main className="px-12% py-28">{children}</main>
        <DiaperCalculator/>
        <Footer/>
    </div>
  )
}

export default App
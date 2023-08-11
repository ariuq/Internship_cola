'use client';
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import profileIcon from "../../public/assets/icons/profile.svg"
import filledProfileIcon from "../../public/assets/icons/filledProfile.svg"
import basket from "../../public/assets/icons/basket.svg"
import {useLogin} from "@components/Login";
import { useSelector } from "react-redux";

const Nav = () => {
const {isLogin, handleLogin} = useLogin();
const {loading, cartItems} = useSelector((state) => state.cart)
return (
  <nav className="navbar">
    <div className="nav_logo">
    <Link href="/">
      <Image  
        src="/assets/images/logo.svg" 
        alt="Pampers Logo"
        width={84}
        height={40}
      />
      </Link>
        </div>
        <div className="menu_items"><NavLinks/></div>
        
        <div className="list_items">
        {isLogin ? (
          <button onClick={handleLogin} className="club_btn">
          <Image
            src={filledProfileIcon}
            className="mr-1.5"

            width={13}
            height={16}
            alt="User icon"
            />
            My Profile
            </button>
        ): (
          <div >
      <Link href="/registration" className="club_btn">
      <Image
        src={profileIcon}
        className="mr-1.5"
        width={13}
        height={16}
        alt="User icon"
        />
        Pampers Club
        </Link>
        </div>
        )}
        {isLogin ? (
           <Link href="/cartPage">
           <Image 
           src={basket}
           width={28}
           height={26} style={{
            marginTop: "5px"
           }}/>
           <span className="cart-badge">{loading? '' : cartItems.reduce((a, c)=> a + c.qty, 0)}</span>
           </Link>
        ): null}
      <Image
        className="fill-white"
        src="/assets/icons/search.svg"
        width={26}
        height={24}
        alt="search icon"
        />
        </div>
  </nav>
)
}

export default Nav
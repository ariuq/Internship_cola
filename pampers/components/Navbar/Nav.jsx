'use client';
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Nav = () => {
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
        <div >
      <Link href="/registration" className="club_btn">
      <Image
        src="/assets/icons/profile.svg"
        className="mr-1.5"
        width={13}
        height={16}
        alt="User icon"
        />
        Pampers Club
        </Link>
        </div>
      <Image
        className="fill-white"
        src="/assets/icons/search.svg"
        width={24}
        height={24}
        alt="search icon"
        />
        </div>
  </nav>
)
}

export default Nav
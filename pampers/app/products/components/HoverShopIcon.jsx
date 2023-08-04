'use client';
import { useState } from "react";
import shopIcon from "../../../public/assets/icons/shop_icon.svg";
import shopIconHover from "../../../public/assets/icons/shop_icon_hover.svg";
import Image from "next/image";

const HoverShopIcon = () => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = () => setIsHover(true);
    const onMouseLeave = () => setIsHover(false);
  return (
    <button onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="shopIcon">
                        {
                            isHover ? (
                                <Image src={shopIconHover} width={20} height={20} alt="hovered shop icon"/>
                            ) : (
                                <Image src={shopIcon} width={20} height={20} alt="shop icon"/>
                            )
                        } 
                        <p>Худалдаж авах</p>
                    </button>
  )
}

export default HoverShopIcon
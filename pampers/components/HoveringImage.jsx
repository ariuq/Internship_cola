'use client';
import Image from "next/image"
import { useState } from "react";


const HoveringImage = ({src}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="flex items-center justify-center">
    {isHovering? (
        <Image src={src} alt="hovered image" className="ease-in-out duration-500" style={{
            width: '90%',
            height: 'auto'
        }}/>

    ) : (
        <Image src={src} alt="images" className="ease-in-out duration-500" style={{
            width: '80%',
            height: 'auto'
        }} />
    )}
    </div>
  )
}

export default HoveringImage
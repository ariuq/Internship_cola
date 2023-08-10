'use client';
import Image from "next/image";
import { useState } from "react";


const ZoomingImage = ({src}) => {
    const[isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
  return (
    <div className="overflow-hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {isHovering? (
            <Image src={src} alt="zomed Image" className="ease-in-out duration-500" style={{
                width: "100%",
                height: "auto",
                transition: "0.5s ease",
                transform: " scale(1.1)"
            }}/>
        ): (
            <Image src={src} alt="image" className="ease-in-out duration-500" style={{
                width: "100%",
                height: "auto"
            }} />
        )}
        
    </div>
  )
}

export default ZoomingImage;
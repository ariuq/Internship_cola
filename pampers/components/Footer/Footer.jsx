'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { socials } from './socials';

const Footer = () => {
  
  const [hovered, setHovered] = useState(Array(socials.length).fill(false));

  const handleSocialIconHover = (index, isHovered) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = isHovered;
    setHovered(updatedHovered);
  };

  return (
    <footer className='footer'>
      <div className="nav_logo">
        <Link href="/"  >
          <Image  
            src="/assets/images/logo.svg" 
            alt="Pampers Logo"
            width={84}
            height={40}
          />
        </Link>
      </div>
      <div className='social-icons'>
      {socials.map((social, index) => (
        <Link key={index} href={social.href} target='_blank' className='social-icon'>
          <Image
            src={hovered[index] ? social.hoverSrc : social.unhoverSrc}
            alt={social.alt}
            width={34}
            height={34}
            priority
            onMouseEnter={() => handleSocialIconHover(index, true)}
            onMouseOut={() => handleSocialIconHover(index, false)}
          />
        </Link>
      ))}
      </div>
    </footer>
  )
}

export default Footer;

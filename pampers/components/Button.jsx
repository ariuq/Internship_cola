import Link from 'next/link';
import React from 'react'

const Button = (props) => {
  return (
    <Link href={props.href} className='orange_button'>
       {props.title} 
    </Link>
  )
}

export default Button;
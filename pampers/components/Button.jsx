import Link from 'next/link';
import React from 'react'

const Button = (props) => {
  return (
    <Link href={props.href} className='orange_button' onClick={props.function}>
       {props.title} 
    </Link>
  )
}

export default Button;
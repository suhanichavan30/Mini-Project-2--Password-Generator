import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <>
    <div className='bg-red-500 text-black p-5 rounded-xl w-56 h-auto'>
        <div>{props.title}</div>
        <div>{props.desc}</div>
    </div>
    </>
  )
}

export default Card
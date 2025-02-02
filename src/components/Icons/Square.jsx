import React from 'react'

const Square = ({size=40,color='white'}) => {
  return (
    <div style={{width:`${size}px`,height:`${size}px`}} className={`bg-${color} rounded`}></div>
  )
}

export default Square
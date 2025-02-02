import React from 'react'

const Circle = ({size=40,color='white'}) => {
  return (
    <div style={{width:`${size}px`,height:`${size}px`}} className={`bg-${color} rounded-full`}></div>
  )
}

export default Circle
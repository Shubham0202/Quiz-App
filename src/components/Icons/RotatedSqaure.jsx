import React from 'react'

const RotatedSqaure = ({size=40,color='white'}) => {
  return (
    <div style={{width:`${size}px`,height:`${size}px`}} className={` bg-${color} rotate-45 rounded-sm`}></div>
  )
}

export default RotatedSqaure
import React from 'react'

const Triangle = ({size=20,color='white'}) => {
  return (
    
    <div style={{borderRight:`${size}px`,borderLeft:`${size}px`}} className={`border-l-transparent border-r-transparent border-b-[35px] border-b-${color}`}></div>
  )
}

export default Triangle
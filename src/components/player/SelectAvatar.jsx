import React from 'react'

const SelectAvatar = () => {
  return (
    <div className='absolute bottom-0 bg-white px-4 py-3 rounded w-4/5'>
        <h2 className='border-2 p-2 rounded text-center'>Characters</h2>
        <div className="all-avatars overflow-scroll h-80 mt-3 avatar-grid gap-2">

            <div className="avatar-frame bg-gray-50 rounded h-24 grid place-items-center">
                <div className="avatar-svg border w-20 h-20"></div>
            </div>
           
           
            
        </div>

        <button className="done-btn sm:cursor-pointer block w-full py-2 text-center font-bold">Done</button>
        </div>
  )
}

export default SelectAvatar
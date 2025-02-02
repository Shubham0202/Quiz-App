import React from 'react'
import Circle from '../Icons/Circle'
import RotatedSqaure from '../Icons/RotatedSqaure'

const BooleanBricks = () => {
    return (
        <div className="ans-bricks p-3 grid grid-cols-2 gap-3">

            <div className="ans-1 flex items-center gap-3 bg-primary-green px-4 py-8 rounded shadow">
                <RotatedSqaure />
                <p className='text-white font-semibold'>True</p>
            </div>
            <div className="ans-1 flex items-center gap-3 bg-primary-red px-4 py-8 rounded shadow">
                <Circle />
                <p className='text-white font-semibold'>False</p>
            </div>
        </div>
    )
}

export default BooleanBricks
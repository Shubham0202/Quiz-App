import React from 'react'
import Square from '../Icons/Square'
import Triangle from '../Icons/Triangle'
import RotatedSqaure from '../Icons/RotatedSqaure'
import Circle from '../Icons/Circle'

const AnswerBricks = () => {
    return (
        <div className="ans-bricks p-3 grid grid-cols-2 gap-3">

            <div className="ans-1 flex items-center gap-3 bg-primary-red p-4 rounded shadow">
                <Triangle/>
                <p className='text-white font-semibold'>Framework</p>
            </div>
            <div className="ans-1 flex items-center gap-3 bg-primary-green p-4 rounded shadow">
                <RotatedSqaure/>
                <p className='text-white font-semibold'>Framework</p>
            </div>
            <div className="ans-1 flex items-center gap-3 bg-primary-blue p-4 rounded shadow">
                <Circle/>
                <p className='text-white font-semibold'>Framework</p>
            </div>
            <div className="ans-1 flex items-center gap-3 bg-primary-yellow p-4 rounded shadow">
                <Square/>
                <p className='text-white font-semibold'>Framework</p>
            </div>

        </div>
    )
}

export default AnswerBricks
import React from 'react'

const WhichQuestion = ({questionNo=1}) => {
    return (
        <div className='grid place-items-center'>
            <h2 className='font-bold text-4xl text-white'>Question {questionNo}</h2>
            <div className="w-16 h-16 my-4 bg-transparent-white rounded-full grid place-items-center text-4xl font-bold">
                <span>5</span>

            </div>
            <p className="text-2xl text-white font-semibold">Go!</p>
        </div>
    )
}

export default WhichQuestion
import React from 'react'

const CurrentQuestionResponses = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className="timer w-16 h-16 grid place-items-center text-white text-lg bg-indigo-700 rounded-full font-bold">13</div>
        <div className="user-answered-question grid place-items-center">
                <p className='w-14 h-14 grid place-items-center text-white bg-blue-900 font-bold text-lg rounded-full'>0</p>
                <p className='px-2 py-1 rounded-full bg-blue-950 text-white font-semibold mt-3'>Answers</p>
        </div>
    </div>
  )
}

export default CurrentQuestionResponses
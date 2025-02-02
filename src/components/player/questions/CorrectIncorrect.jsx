import React from 'react'
import CorrectImage from '../../../assets/ohters/correct.png'
const CorrectIncorrect = ({Image=CorrectImage,text="Correct",isCorrect=true,questionScore}) => {
  return (
      <div className='text-white grid place-items-center'>
            <h3 className='text-4xl font-bold'>{text}</h3>
            <img src={Image} className='rounded-full w-28 h-28 border-8 my-3' alt="" />
            {
                (isCorrect)?
            <p className="answer-streak font-semibold">Answer Streak 
                <span className='ml-2 rounded-full bg-transparent-white px-4 py-2 font-bold border-2'>1</span>
            </p>:null
            }
            <div className="current-question-score text-center text-xl font-bold px-4 py-3 my-4 bg-transparent-black2x w-full rounded">{questionScore}</div>
        </div>
  )
}

export default CorrectIncorrect
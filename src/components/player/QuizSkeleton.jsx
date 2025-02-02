import React from 'react'
import WhichQuestion from './questions/WhichQuestion'
import GetReady from './questions/GetReady'
import CorrectIncorrect from './questions/CorrectIncorrect'
import IncorrectImage from '../../assets/ohters/incorrect.png'
const QuizSkeleton = ({ isQuizStarted = false }) => {
    return (
        <div className='h-screen flex justify-between flex-col'>
            {/* first */}
            <div className="flex items-center justify-between p-3">
                <p className="question-no rounded-full bg-transparent-white font-bold px-4 py-2 text-xl">1</p>
                <div className="quiz bg-transparent-white rounded-full px-6 py-2 flex items-center gap-2">
                    <div className="img-or-svg border w-5 h-5"></div>
                    <p className='font-bold text-lg'>Quiz</p>
                </div>
                <div className="empty"></div>
            </div>
            {/* middle */}
            <div className="h-full grid place-items-center overflow-y-scroll">

                <div className="player-wrapper w-4/5">
                    {/* component */}
                    {/* <WhichQuestion /> */}
                    {/* <Correct/> */}
                    {/* <GetReady/> */}
                    <CorrectIncorrect Image={IncorrectImage} text='Incorrect' isCorrect={false} questionScore={'Try agian!'}/>
                    {/* component */}
                </div>

            </div>
            {/* end */}
            <div className="bg-transparent-white flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                <p className="avatar w-12 h-12 border"></p>
                <h3 className='font-bold text-xl'>Shubh</h3>
                </div>
                <p className='w-24 text-center py-2 bg-transparent-black text-white rounded text-lg font-bold'>0</p>
            </div>
        </div>
    )
}

export default QuizSkeleton
import React from 'react'
import { Image } from 'lucide-react'
const QuizExample = ({ isTrueOrFalse = false,isTypeAnswer=false }) => {
    return (
        <div className="Question-demo">
            <p className="font-bold text-center mb-2">{isTrueOrFalse?"Is paris is the capital of France?":"What is the capital of France?"}</p>
            <div className="grid place-items-center">
                <Image className='w-20 h-20 text-gray-400' />
            </div>
            <div className="grid grid-cols-2 gap-2">
                {
                    !isTypeAnswer && <>
                    <p className="text-white font-bold px-2 py-2 rounded bg-primary-red">{isTrueOrFalse?"True":"A Paris"}</p>
                    </>
                }
                <p className="text-white font-bold px-2 py-2 rounded bg-primary-blue">
                    {isTrueOrFalse?"False":(!isTrueOrFalse && isTypeAnswer)?"Type answer|":"New York"}
                    {}
                    </p>
                {
                    !isTrueOrFalse && !isTypeAnswer && <>
                        <p className="text-white font-bold px-2 py-2 rounded bg-primary-yellow">USA</p>
                        <p className="text-white font-bold px-2 py-2 rounded bg-primary-green">America</p>
                    </>
                }
            </div>

        </div>
    )
}

export default QuizExample
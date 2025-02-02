import { Image } from 'lucide-react'
import React from 'react'

const MCQCard = () => {
    return (
        <div className="card">
            <p className="quiz-no font-bold my-2">1 Quiz</p>
            <div className="flex items-end ">
                <div className="icons">
                    <div className="duplicate-icon w-7 h-7 border-2"></div>
                    <div className="delete-icon w-7 h-7 border-2"></div>
                </div>
                <div className="quiz-type-box px-2 w-40 h-28 border-4 border-slate-300 rounded">
                    <h3 className="question text-gray-500 font-bold text-center mb-1">Question</h3>

                    <div className="question-format flex items-center gap-4">
                        <p className="appeared-question px-2 py-1 border-2 w-fit rounded-full text-sm text-gray-400">20</p>
                        <div className="img-wrapper border-2 border-dashed grid place-items-center p-1">
                            <Image className='text-gray-400'/>
                        </div>
                    </div>
                    <div className="options grid grid-cols-2 gap-1 mt-3">
                        <div className="op-1 p-1 border rounded"></div>
                        <div className="op-2 p-1 border rounded"></div>
                        <div className="op-3 p-1 border rounded"></div>
                        <div className="op-4 p-1 border rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MCQCard
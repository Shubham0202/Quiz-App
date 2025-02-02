import React from 'react'
import Triangle from '../Icons/Triangle'
import RotatedSqaure from '../Icons/RotatedSqaure'
import Circle from '../Icons/Circle'
import Square from '../Icons/Square'

const AnswersResponsesPoll = ({isBooleanQuestion=false}) => {

    return (
        <div className='flex items-end justify-center gap-3'>
            <div className="poll1 bg-primary-red w-20 rounded">
                <div className="poll-growth w-full bg-primary-red"></div>
                <div className="wrapper w-full flex items-center justify-center p-1">
                    <Triangle size={20}/>
                    <p className="poll-response text-white">0</p>
                    <div className="correct-answer">✅</div>
                </div>
            </div>
            <div className="poll2 bg-primary-green w-16 rounded flex flex-col justify-end items-end">
                <div className="poll-growth w-full bg-primary-green h-10 rounded"></div>
                <div className="wrapper w-full flex items-center justify-center p-1 gap-2">
                    <RotatedSqaure size={15} />
                    <p className="poll-response">0</p>
                    <div className="correct-answer"></div>
                </div>
            </div>
            {
                // check it is true false question or not and display other two response bars
                !isBooleanQuestion&& <>
                <div className="poll3 bg-primary-blue w-16 rounded">
                    <div className="poll-growth w-full bg-primary-blue"></div>
                    <div className="wrapper w-full flex items-center justify-center p-1 gap-2">
                        <Circle size={15} />
                        <p className="poll-response">0</p>
                        <div className="correct-answer"></div>
                    </div>
                </div><div className="poll4 bg-primary-yellow w-16 rounded">
                        <div className="poll-growth w-full bg-primary-yellow"></div>
                        <div className="wrapper w-full flex items-center justify-center p-1 gap-2">
                            <Square size={15} />
                            <p className="poll-response">0</p>
                            <div className="correct-answer"></div>
                        </div>
                    </div>
                    </>
            }
            
        </div>
    )
}

export default AnswersResponsesPoll
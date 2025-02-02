import { BookOpenCheck, BookX, Plus, ToyBrick, Type } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import QuizExample from './questionTypecomponents/QuizExample'
import { context } from '../../../../context/QuizContextProvider';

const QuestionTypes = ({ sendToParent }) => {
    const [hoveredExample, setHoveredExample] = useState('quiz');
    const [quizType, setQuizType] = useState('quiz');

    const {
        setIsQuestionTYpesActive,
    } = useContext(context);
    useEffect(() => {
        sendToParent({ QType: quizType, isActive: true });
    }, [quizType, sendToParent,changeType]);

    function changeType(type) {
        setQuizType(type);
        setIsQuestionTYpesActive(false);
    }

    return (
        <div className='absolute top-0 left-0 z-10 w-full h-full grid place-items-center bg-transparent-black'>

            <div className="bg-white sm:w-4/5 sm:h-4/5 rounded m-2">
                <h3 className="add-title px-8 py-4 bg-gray-100 rounded w-fit">
                    <Plus className='inline' />
                    Add
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-2 m-1">
                    <div className="w-full">
                        <p className="text-gray-500 font-bold">Test knowledge</p>
                        <ul className="">
                            <li onClick={() => changeType('quiz')} onMouseEnter={() => setHoveredExample('quiz')} onMouseLeave={() => setHoveredExample('quiz')} className='sm:cursor-pointer flex items-center gap-2 px-2 py-3 hover:bg-slate-200 transition-all duration-200 rounded'>
                                <BookOpenCheck className='text-slate-400' />
                                <p className="ml-2 font-bold">Quiz</p>
                            </li>
                            <li onClick={() => changeType('trueOrfalse')} onMouseEnter={() => setHoveredExample('trueORfalse')} onMouseLeave={() => setHoveredExample('quiz')} className='sm:cursor-pointer flex items-center gap-2 px-2 py-3 hover:bg-slate-200 transition-all duration-200 rounded'>
                                <BookX className='text-slate-400' />
                                <p className="ml-2 font-bold">True or false</p>
                            </li>
                            <li onClick={() => changeType('typeanswer')} onMouseEnter={() => setHoveredExample('typeAnswer')} onMouseLeave={() => setHoveredExample('quiz')} className='sm:cursor-pointer flex items-center gap-2 px-2 py-3 hover:bg-slate-200 transition-all duration-200 rounded'>
                                <Type className='text-slate-400' />
                                <p className="ml-2 font-bold">Type answer</p>
                            </li>
                        </ul>
                    </div>
                    <div className="shrink-0">
                        <p className="text-gray-500 font-semibold">Example</p>
                        {
                            hoveredExample === 'quiz' && <QuizExample />

                        }
                        {
                            hoveredExample === 'trueORfalse' && <QuizExample isTrueOrFalse={true} />
                        }
                        {
                            hoveredExample === 'typeAnswer' && <QuizExample isTypeAnswer={true} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionTypes
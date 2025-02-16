import React, { useContext, useEffect, useState } from 'react'
import MCQCard from './asideComponents/MCQCard'
import { context } from '../../../context/QuizContextProvider';

const Aside = () => {
    const {
        setIsQuestionTYpesActive,
        saveQuestion,
        setQuestionsList,
        questionsList,
        questionText,
        setQuestionText,

        setOptionText1,

        setOptionText2,

        setOptionText3,

        setOptionText4,
    } = useContext(context);

    function activeQuestionTypeComponent() {
        setIsQuestionTYpesActive(true);
        //when button is clicked then saveQuestion set into question list
        // if (questionText.length > 0) {
        //     setQuestionText('');
        //     setOptionText1('');
        //     setOptionText2('');
        //     setOptionText3('');
        //     setOptionText4('');

        // }
    }
    return (
        <div className='hidden sm:block h-full bg-white p-2'>
            <div className="all-quiz-cards">
                <MCQCard />
            </div>
            <div className="add-more-quizes text-center my-3">
                <button type='submit' onClick={activeQuestionTypeComponent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded block w-full mb-2">Add question</button>
                <button type='button' className="bg-slate-500 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded  block w-full">Add slide</button>
            </div>
        </div>
    )
}

export default Aside
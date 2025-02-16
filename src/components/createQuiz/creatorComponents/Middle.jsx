import React, { useContext, useEffect, useState } from 'react';
import MediaUpload from './middleComponents/MediaUpload';
import { Circle, Image, Pentagon, Square, Triangle } from 'lucide-react';
import AddAnswer from './middleComponents/AddAnswer';
import QuestionTypes from './middleComponents/QuestionTypes';
import { context } from '../../../context/QuizContextProvider';

const Middle = ({ register }) => {
  const {
    setIsQuestionTYpesActive,
    isQuestionTYpesActive,
    setSaveQuestion,
    questionText,
    setQuestionText,
    optionText1,
    setOptionText1,
    optionText2,
    setOptionText2,
    optionText3,
    setOptionText3,
    optionText4,
    setOptionText4,
  } = useContext(context);

  const [selectedQuizType, setSelectedQuizType] = useState('quiz');
  const [selectedQuestionType, setSelectedQuestionType] = useState('multipleChoice');

  useEffect(() => {
    setSaveQuestion({
      userId:"user123",
      question: questionText,
      options: [optionText1,optionText2,optionText3,optionText4],
      correctAnswer: 0,
      questionType: selectedQuestionType,
    });
  }, [questionText, optionText1, optionText2, optionText3, optionText4]);

  const getIsActiveComponent = (data) => {
    setIsQuestionTYpesActive(data.isActive);
    setSelectedQuizType(data.QType);
  };

  const sendOptionsValue = (data) => {
    switch (data.answerNo) {
      case 1:
        setOptionText1(data.optionText);
        break;
      case 2:
        setOptionText2(data.optionText);
        break;
      case 3:
        setOptionText3(data.optionText);
        break;
      case 4:
        setOptionText4(data.optionText);
        break;
      default:
        break;
    }
  };

  return (
    <div className='relative px-4 py-2 w-full bg-theme1 bg-no-repeat bg-cover overflow-scroll'>
      {isQuestionTYpesActive && <QuestionTypes sendToParent={getIsActiveComponent} />}
      <input {...register("questionText")} onChange={(e) => setQuestionText(e.target.value)} type="text" className="question w-full px-2 py-4 rounded" placeholder='Start typing your question here...' />
      <MediaUpload />
      <div className="add-answers mt-4 grid grid-cols-2 gap-2">
        <AddAnswer register={register} sendOptionsValue={sendOptionsValue} answerNo={1} />
        <AddAnswer register={register} sendOptionsValue={sendOptionsValue} answerNo={2} iconBgColor='yellow' answerIcon={<Circle className='text-white'/>} />
        <AddAnswer register={register} sendOptionsValue={sendOptionsValue} answerNo={3} iconBgColor='green' answerIcon={<Square className='text-white'/>} />
        <AddAnswer register={register} sendOptionsValue={sendOptionsValue} answerNo={4} iconBgColor='blue' answerIcon={<Pentagon className='text-white'/>} />
      </div>
    </div>
  );
}

export default Middle;
import { BadgeCheck, Image, Triangle } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const AddAnswer = ({ answerIcon = <Triangle className='text-white' />, answerNo = 1, iconBgColor = "red", sendOptionsValue = null, register }) => {
  const divColorRef = useRef(null);
  const inputRef = useRef(null);
  const correctAnswerIconRef = useRef(null);

  function checkIsAnswerFilled(elem) {
    if (elem.target.value.length > 0) {
      if (inputRef.current) {
        inputRef.current.classList.add('text-white');
        divColorRef.current.classList.replace('bg-white', `bg-primary-${iconBgColor}`);
      }
    } else {
      if (inputRef.current) {
        inputRef.current.classList.remove('text-white');
        divColorRef.current.classList.replace(`bg-primary-${iconBgColor}`, 'bg-white');
      }
    }
  }

  function selectCorrectAnswer() {
    const previouslySelected = document.querySelector('.selected-answer');
    if (previouslySelected) {
      previouslySelected.classList.remove('text-white', 'selected-answer');
      previouslySelected.classList.add('text-gray-300');
    }

    if (correctAnswerIconRef.current) {
      correctAnswerIconRef.current.classList.remove('text-gray-300');
      correctAnswerIconRef.current.classList.add('text-white', 'selected-answer');
    }
  }

  const handleInputChange = (e) => {
    checkIsAnswerFilled(e);
    sendOptionsValue({ answerNo, optionText: e.target.value });
  };

  return (
    <div ref={divColorRef} className="ans-1 relative transition-all duration-200 bg-white p-3 rounded flex items-center">
      <div className={`bg-primary-${iconBgColor} p-3 rounded`}>
        {answerIcon}
      </div>
      <input
        ref={inputRef}
        {...register(`option${answerNo}`)}
        onKeyUp={handleInputChange}
        type="text"
        className='w-full px-2 py-3 outline-none bg-transparent'
        placeholder={`Add Answer ${answerNo}`}
      />
      <Image className='text-gray-400' />
      <div onClick={selectCorrectAnswer} className={`bg absolute sm:cursor-pointer right-1 rounded-full bg-gray-300 top-0`}>
        <BadgeCheck className='text-gray-300' ref={correctAnswerIconRef} />
      </div>
    </div>
  );
}

export default AddAnswer;
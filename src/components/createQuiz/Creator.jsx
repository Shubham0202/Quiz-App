import React, { useContext } from 'react';
import Navbar from './creatorComponents/Navbar';
import Aside from './creatorComponents/Aside';
import Middle from './creatorComponents/Middle';
import Right from './creatorComponents/Right';
import { useForm } from 'react-hook-form';
import useSendQuizQuestions from '../../customHooks/useSendQuizQuestions';
import { context } from '../../context/QuizContextProvider';

const Creator = () => {
  const {
    handleSubmit,
    register,
  } = useForm();

  const {
    saveQuestion,
  } = useContext(context);
  const { postData, error, status } = useSendQuizQuestions('http://localhost:3000/addUserQuiz');

  function onSubmit(fdata) {
    console.log(saveQuestion.options.filter(item=>item!==''));
    postData({ data: saveQuestion });
    console.log(fdata);
  }

  return (
    <div className='h-screen relative overflow-x-hidden'>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)} className="flex sm:h-[calc(100%-60px)]">
        <Aside />
        <Middle register={register} />
        <Right />
        <div className="right"></div>
      </form>
    </div>
  );
}

export default Creator;

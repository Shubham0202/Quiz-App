import { createContext, React, useEffect, useState, } from 'react'
const context = createContext();

const QuizContextProvider = ({ children }) => {

  const [isQuestionTYpesActive, setIsQuestionTYpesActive] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const [saveQuestion, setSaveQuestion] = useState({});
  const [questionsList, setQuestionsList] = useState([]);

  const [questionText, setQuestionText] = useState('');
  const [optionText1, setOptionText1] = useState('');
  const [optionText2, setOptionText2] = useState('');
  const [optionText3, setOptionText3] = useState('');
  const [optionText4, setOptionText4] = useState('');

  function handleResize() {
    setWindowSize(window.innerWidth);

  }
  useEffect(() => {
    console.log(windowSize);
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

  const contextValue = {
    isQuestionTYpesActive,
    windowSize,
    questionsList,
    saveQuestion,
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
    setSaveQuestion,
    setQuestionsList,
    setIsQuestionTYpesActive,
    handleResize,

  }

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  )
}

export default QuizContextProvider
export { context }
import React, { useEffect, useState } from 'react'
import '../../components/questionCard/QuestionCard.css'
function QuestionCard({ questionsData, score, setScore, modal, setModal, count, setCount }) {
  const [timer,setTimer]=useState(30)
  const approvedChoice = (e) => {
    const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer;
    if (checkAnswer) {
    setScore(score+100)
    }
    setCount(count + 1)
    if (count == 9) setModal(true)
    setTimer(30)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer-1)
 
      }
      if (timer == 0 && count < 0) {
        setCount(count + 1)
        setTimer(30)
      } else if (count >= 10) {
        setModal(true)
      }
    }, 1000);
    return ()=>clearInterval(interval)
  }, [timer])
  return (
    <div>
      <p className='timer'>{timer }</p>
      <div className='title'> 
      {count+1}/10 -  {questionsData[count]?.question}
      </div>
      {
        questionsData[count]?.answers?.map((answer, i) => (
          <button onClick={approvedChoice} key={i} value={answer}>{answer }</button>
        ))
      }
    </div>
  )
}

export default QuestionCard

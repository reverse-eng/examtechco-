
import React, {useState, useEffect} from "react"
import { connect} from "react-redux"

import ExamForm from './ExamForm';


const PracticeExam = ({ examQAS}) => {
  const [index, setIndex] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  //how many questions 
  const [Questions, setQuestions] = useState(examQAS)
  //show first question
  const [currentQuestion, setCurrentQuestion] = useState(Questions[index]);
  // after user submits answer go to next question
  const submitAnswer = (answer, id) => {
    setAnsweredQuestions([...answeredQuestions,{userAnswer: answer, actualAnswer: Questions[index].answer, questionId: id, userCorrect: (answer == Questions[index].answer )} ])
      
    if (index == Questions.length-1 ) {
      console.log(`This is the results ${answeredQuestions}`)
      setShowResults(true)
    } else {
    console.log(`answer selected -  ${answer} 
          index - ${index}
          question id - ${id}
    `)
      setIndex(index + 1)
      
    }
  }
  useEffect(()=> {
    console.log(`Current answers - ${answeredQuestions}
      current index - ${index}
      answers: ${JSON.stringify(answeredQuestions)}
    `)
    setCurrentQuestion(Questions[index])
    setAnsweredQuestions([...answeredQuestions])
    //setCurrentQuestion(Object.assign({}, Questions[index]) )
  },[index])
  // Once at end of list get results and send them
  
  const Score = ()=> {
    let userCorrect = answeredQuestions.filter((answers)=> answers.userCorrect == true )
    return (userCorrect.length / Questions.length ) * 100
  }
  // Ask user if wants to take again
  return(
  <>
    {showResults ? 
     
      <div>
        <div>Score: {Score()} %</div>
      </div>
    :
      <ExamForm questionId={currentQuestion.id} question={currentQuestion.question} options={currentQuestion.options.list} answerQuestion={submitAnswer} /> 
    }
    </>
)}

const mapStateToProps = ({ examQAS }) => {
  return {
  examQAS
}};


export default connect(mapStateToProps)(PracticeExam)
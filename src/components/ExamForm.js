
import React, {useState, useEffect} from "react"
import { connect} from "react-redux"



const ExamForm = ({ user, question, options, answerQuestion, questionId}) => {
    const [answerSelected, setAnswerSelected] = useState('');
    const [selected, setSelected] = useState('')

    const handleOption = () => {
        answerQuestion(answerSelected, questionId)
        setSelected(Object.assign({}, answerSelected) )
    }
    
    const handleCheckBox = (event) => {
        console.log(`Handle checkbox ${event.target.value}`)
        setAnswerSelected(event.target.value)
    }


    return (
       <div>
           <div>Question: {question}</div>
           <div>
               {
                   options.map((option, index) => (
                      
                    <div key={index}>
                            <input  type="radio" value={option} name={option} checked={answerSelected === option}  onChange={(event)=> handleCheckBox(event)} />
                            <span>{option}</span>
                    </div>
                   ))
               }
           </div>
           <button onClick={()=> handleOption()}>Submit</button>
       </div>
    )
}

const mapStateToProps = ({ user}) => {
  return {
  user
}};


export default connect(mapStateToProps)(ExamForm)

import React from "react"
import { connect} from "react-redux"


const PracticeExam = ({ examQAS}) => (
  <>
    <h1>Questions</h1>
    <ul>
        {examQAS.map((exam, index)=>(
             <li key={index}> {JSON.stringify(exam)}</li>
        )
        )   
        }
      
    </ul>
  </>
)

const mapStateToProps = ({ examQAS }) => {
  return {
  examQAS
}};


export default connect(mapStateToProps)(PracticeExam)
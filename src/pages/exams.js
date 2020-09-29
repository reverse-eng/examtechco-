import React, { useEffect} from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { connect} from "react-redux"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { allExams, getQuestionsForExam } from "../redux/actions"

const Exams = ({user, exams, getExams, startExam, redirectToStartExam}) => {
    useEffect(() => {
        getExams();
    }, [])

const handleStartExam = (id) => {
    console.log('EXAM ID - ',id );
    startExam(id)
}
if (redirectToStartExam && !Object.keys(user).length){
    //added because navigate uses the window object and build will break if not added 
    if (typeof window !== 'undefined') {
    navigate(redirectToStartExam)
    }
    return null
}
return (
    <Layout>
      <SEO title="Exams" />
      <h1>Exams Available</h1>
      {exams ? 
        exams.map((exam, index )=> (
            <button onClick={() => handleStartExam(exam.id)} key={index}>{exam.name}</button>
        ))
        :
          <h3>No Exams currently Available</h3>
      }

    </Layout>
)
}
Exams.propTypes = {
    exams: PropTypes.array,
    getExams: PropTypes.func.isRequired
  }

const mapStateToProps = ({ exams, redirectToStartExam, user }) => {
    return { exams, redirectToStartExam, user }
  }
  
  const mapDispatchToProps = dispatch => {
    return { 
        getExams: () => dispatch(allExams()),
        startExam: (examId) => dispatch(getQuestionsForExam(examId))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Exams)
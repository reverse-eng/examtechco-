import React, { useEffect, useState} from "react"
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
    //added because navigate uses the window object and build will break if not added 
    if (typeof window !== 'undefined') {
    navigate(redirectToStartExam)
    }
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
      {exams && exams.length ? 
        exams.map((exam, index )=> (
          <div key={index}>
            <h2>Exams Available</h2>
            <button onClick={() => handleStartExam(exam.id)} >{exam.name}</button>
          </div>
        ))
        :
          <h2>No Exams currently Available</h2>
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
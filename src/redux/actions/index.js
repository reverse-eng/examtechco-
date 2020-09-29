import axios from "axios";
import { 
  SET_EXAM_QAS, 
  GET_ALL_EXAMS, 
  LOGIN_REDIRECT,
  EXAM_START_REDIRECT, 
  SET_USER_DETAILS, 
  SET_ERROR_RESPONSE 
} from "./types";

export const loginUser = (credentials)=>{  
  return (dispatch)=> {
        return axios.post("https://api.beginfresh.xyz/auth/local/", credentials)
    .then(({ data }) => {
      dispatch(setUserDetails(data));
      dispatch(redirectToLoginPage('/app/profile'))
    })
    .catch((data) =>  {
        return dispatch(setErrorResponse(data.response.data.message[0].messages[0].message))
    })
  }
}

export const allExams = () => {
  return (dispatch)=>{
    return axios.get('https://api.beginfresh.xyz/exams')
    .then(({data}) => {
      dispatch(setAllExams(data))
    })
    .catch((data) => {
      return dispatch(setErrorResponse(data.response.data.message[0].messages[0].message))
    })
  }
}

export const getQuestionsForExam = (examId)=>{  
  return (dispatch)=> {
        return axios.get(`https://api.beginfresh.xyz/exam-qas/allbyexam/${examId}`)
    .then(({ data }) => {
      dispatch(setExamQAs(data));
      dispatch(redirectToStartExam('/app/practiceExam'))
    })
    .catch((data) =>  {
        return dispatch(setErrorResponse(data.response.data.message[0].messages[0].message))
    })
  }
}

function setUserDetails(data) {
  return {
    type: SET_USER_DETAILS,
    payload: data
  };
}

const setExamQAs = (data) => ({
    type: SET_EXAM_QAS,
    payload: data
})
const setErrorResponse = (data) => ({
        type: SET_ERROR_RESPONSE,
        payload: data
})

const redirectToLoginPage = (path)=> ({
    type: LOGIN_REDIRECT,
    payload: path
})

const redirectToStartExam = (path)=> ({
  type: EXAM_START_REDIRECT,
  payload: path
})

const setAllExams = (data) => ({
  type: GET_ALL_EXAMS,
  payload: data
})
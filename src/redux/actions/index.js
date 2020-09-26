import axios from "axios";
import { REDIRECT, SET_USER_DETAILS, SET_ERROR_RESPONSE } from "./types";

export const loginUser = (credentials)=>{  
  return (dispatch)=> {
        return axios.post("https://api.beginfresh.xyz/auth/local/", credentials)
    .then(({ data }) => {
      dispatch(setUserDetails(data));
      dispatch(redirectToNewPage('/app/profile'))
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

const setErrorResponse = (data) => ({
        type: SET_ERROR_RESPONSE,
        payload: data
})

const redirectToNewPage = (path)=> ({
    type: REDIRECT,
    payload: path
})
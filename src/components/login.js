import React, {useState} from "react"
import { navigate } from "gatsby"
import {loginUser} from '../redux/actions/index';

import PropTypes from "prop-types"
import { connect} from "react-redux"



const Login = ({ user, LogInClick, redirectToLogin, redirectToStartExam}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('identifier', userName)
        formData.append('password', password)
        LogInClick(formData)
    }
    if (redirectToLogin && redirectToStartExam && Object.keys(user).length){
      //added because navigate uses the window object and build will break if not added 
      if (typeof window !== 'undefined') {
      navigate(redirectToStartExam)
      console.log('redirect to start exam')
      }
      return null
    } else if (redirectToLogin && !redirectToStartExam && Object.keys(user).length ){
      //added because navigate uses the window object and build will break if not added 
      if (typeof window !== 'undefined') {
        navigate(redirectToLogin)
        console.log('redirect to profile')
        }
        return null
    }
      
    return (
    
      <form onSubmit={(event)=> handleFormSubmit(event)}>
      <label>
        User Name: 
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}
  Login.propTypes = {
    LogInClick: PropTypes.func.isRequired
  }
  const mapStateToProps = ({ user, redirectToLogin, redirectToStartExam}) => {
    return {
      user,
      redirectToLogin,
      redirectToStartExam
  }};

  const mapDispatchToProps = (dispatch) => {
    return {
      LogInClick: (credentials) => dispatch(loginUser(credentials)),
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Login);
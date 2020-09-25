import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {loginUser} from '../redux/actions/index';

import PropTypes from "prop-types"
import { connect } from "react-redux"



const Login = ({ user, LogInClick}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('identifier', userName)
        formData.append('password', password)
        LogInClick(formData)

        console.log(`userLoggedIn: ${JSON.stringify(user)}`)
    }
    return (
    <div>
      {Object.keys(user).length ? <p>User Logged In</p>
      : 
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
      }
    </div>
  )
}
  Login.propTypes = {
    user: PropTypes.object.isRequired,
    LogInClick: PropTypes.func.isRequired
  }
  const mapStateToProps = ({ user}) => ({
    user
  });

  const mapDispatchToProps = (dispatch) => {
    return {
      LogInClick: (credentials) => dispatch(loginUser(credentials)),
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Login);
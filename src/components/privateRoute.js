import React from "react"
import { navigate } from "gatsby"
import { connect} from "react-redux"


const PrivateRoute = ({user, component: Component, location, ...rest }) => {
    //const isLoggedIn = ()=> Object.keys(user).length;
    if (!Object.keys(user).length && location.pathname !== `/app/login`) {
      navigate("/app/login")
      return null
    }
    return <Component {...rest} />
  }

const mapStateToProps = ({ user}) => {
    return {
    user
  }};

export default connect(mapStateToProps)(PrivateRoute);
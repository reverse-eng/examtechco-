import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { navigate } from "gatsby"
import { connect} from "react-redux"

const Header = ({ siteTitle, user, LogOut, clearRedirects }) => {
  const handleHomeButton = ()=>{
    clearRedirects()
    navigate('/exams')
  }

  return(
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'inline-block' 
      }}
    >
      <h1 style={{ margin: 0}}>
        <a
          style={{
            color: `white`,
            textDecoration: `none`,
            cursor: 'pointer'
          }}
          onClick={()=>handleHomeButton()}
        >
          {siteTitle}
        </a>
      </h1>
    </div>
    <div
      style={{
        margin: `0 auto`,
        float: 'right',
        padding: `1.45rem 1.0875rem`,
        marginTop: '14px'
      }}
    >
      {
      !Object.keys(user).length ? <h4 style={{ margin: 0 }}>
      <Link
        to="/app/login"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Login
      </Link>
    </h4> :<button onClick={()=> LogOut()}>Sign Out</button>
    }
      
    </div>

  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


const mapStateToProps = ({ user}) => {
  return {
    user
}};

const mapDispatchToProps = (dispatch) => {
  return {
    LogOut: () => dispatch({type: 'LOGOUT_USER'}),
    clearRedirects: ()=> dispatch({type: 'CLEAR_REDIRECTS'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

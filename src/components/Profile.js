
import React from "react"
import { connect} from "react-redux"


const Profile = ({ user}) => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {user.user.username}</li>
      <li>E-mail: {user.user.email}</li>
    </ul>
  </>
)

const mapStateToProps = ({ user}) => {
  return {
  user
}};


export default connect(mapStateToProps)(Profile)
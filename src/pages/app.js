import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import PrivateRoute from '../components/privateRoute'
import Login from '../components/login'
import Profile from '../components/Profile'
import PracticeExam from '../components/PracticeExam'

const App = ()=> (
    <Layout>
      <Router>
          <PrivateRoute default path='/app/profile' component={Profile}  />
          <PrivateRoute path='/app/practiceExam' component={PracticeExam} />
          <Login path='/app/login' />
      </Router>
    </Layout>
)

export default App;
import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import PrivateRoute from '../components/privateRoute'
import Login from '../components/login'
import Profile from '../components/Profile'

const App = ()=> (
    <Layout>
      <Router>
          <PrivateRoute default path='/app/profile' component={Profile}  />
          <Login path='/app/login' />
      </Router>
    </Layout>
)

export default App;
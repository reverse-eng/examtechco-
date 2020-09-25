import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/login"

import PropTypes from "prop-types"
import { connect } from "react-redux"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)



Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}



const mapStateToProps = ({ count, user }) => {
  return { count, user }
}

const mapDispatchToProps = dispatch => {
  return { 
      increment: () => dispatch({ type: `INCREMENT` }),
  }
}

const ConnectedComponents = connect(mapStateToProps, mapDispatchToProps)

const ConnectedCounter = ConnectedComponents(Counter);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ConnectedCounter />
    <Login />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

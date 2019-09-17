import React, { Component } from "react"
import { renderRoutes } from "react-router-config"
import { Link } from "react-router-dom"

class RootLayout extends Component {
  render() {
    return (
      <div className="main">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="container">{renderRoutes(this.props.route.routes)}</div>
      </div>
    )
  }
}

export default RootLayout

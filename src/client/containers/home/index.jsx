import React, { Component } from "react"
import Component1 from "../../components/home/component1"
import loadable from "@loadable/component"
const Component2 = loadable(() => import("../../components/home/component2"))

class Home extends Component {
  render() {
    return (
      <div>
        This is home
        <br />
        <Component1 />
        <Component2 />
      </div>
    )
  }
}

export default Home

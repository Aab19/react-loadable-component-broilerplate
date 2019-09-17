import React, { Component } from "react"
import { connect } from "react-redux"
import { getUser } from "../../../store/user/actions"

class Users extends Component {
  static fetchData(store, params, query) {
    return store.dispatch(
      getUser({
        filter: "list-user"
      })
    )
  }
  componentDidMount() {
    if (!this.props.users["list-user"]) {
      this.props.dispatch(
        getUser({
          filter: "list-user"
        })
      )
    }
  }
  generateUser(data) {
    return data.map((val, idx) => {
      return (
        <li key={idx}>
          <img src={val.avatar_url} />
          <p>{val.login}</p>
        </li>
      )
    })
  }
  render() {
    if (
      !this.props.users["list-user"] ||
      (this.props.users["list-user"] &&
        this.props.users["list-user"].in_progress)
    ) {
      return <p>Loading...</p>
    } else {
      if (this.props.users["list-user"].status === 200) {
        return (
          <ul>{this.generateUser(this.props.users["list-user"].result)}</ul>
        )
      } else {
        return <p>user not found</p>
      }
    }
  }
}

function mapStateToProps(state) {
  return { users: state.Users }
}

export default connect(mapStateToProps)(Users)

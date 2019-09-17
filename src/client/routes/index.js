import RootLayout from "../layout/Root"
import loadable from "@loadable/component"

// components
import Home from "../containers/home/index"
import NotFound from "../containers/error/404"

// import component with loadable
const Users = loadable(() => import("../containers/users/index"))

export default [
  {
    component: RootLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/users",
        exact: true,
        component: Users
      },
      {
        path: "*",
        exact: true,
        component: NotFound
      }
    ]
  }
]

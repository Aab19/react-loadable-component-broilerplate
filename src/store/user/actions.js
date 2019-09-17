import { CALL_API } from "../../middlewares/api"

export const GET_USER = "GET_USER"

export function getUser(params) {
  return {
    [CALL_API]: {
      type: GET_USER,
      filter: params.filter,
      method: "get",
      endpoint: "/api/users?since=135"
    }
  }
}

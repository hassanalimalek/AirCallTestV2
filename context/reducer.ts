import { defaultUserState } from '../data/defaultUser'
import { getCookie, removeCookie, setCookie } from '../libs/shared-utils'

import { actionTypes } from './actionTypes'

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      setCookie('authUser', payload.accessToken, { expires: 10 })
      // let parsed = JSON.parse(getCookie('authUser'))
      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken
      }
    case actionTypes.LOGOUT_USER:
      removeCookie('authUser')
      return { ...state, user: defaultUserState.user, accessToken: '' }
    default:
      return state
  }
}

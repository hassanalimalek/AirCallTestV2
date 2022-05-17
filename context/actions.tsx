import { Action, UserState } from '../types';

import { actionTypes } from './actionTypes';

export const loginUser = (user: UserState): Action => ({
  payload: user,
  type: actionTypes.USER_LOGIN,
});

export const logoutUser = (): Action => ({
  type: actionTypes.LOGOUT_USER,
});

import { Dispatch } from "redux";
import { authAPI } from "../API/API";
import { ThunkAction } from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

export type DataType = {
  id: number;
  email: string;
  login: string;
};
export type isAuthType = {
  isAuth: boolean;
};
export type AuthType = typeof initialState;
export const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (
  state: AuthType = initialState,
  action: ActionAuthType
): typeof initialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUserDataAC = (
  id: null,
  login: null,
  email: null,
  isAuth: boolean
) => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  } as const;
};
export const getUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(
        setUserDataAC(
          response.data.data.id,
          response.data.data.login,
          response.data.data.email,
          true
        )
      );
    }
  });
};

export const login =
  (email: string, password: string, rememberMe: false): ThunkType =>
  (dispatch, getState: () => AuthType) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getUserData());
      }else {
        // let action = stopSubmit("Login",{email:"email is wrong"})
        // dispatch(action)
      }
    });
  };

export const LogOut = (): ThunkType => (dispatch) => {
  authAPI.Logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserDataAC(null, null, null, false));
    }
  });
};
type ThunkType = ThunkAction<void, AuthType, unknown, ActionAuthType>;
type setUserDataACType = ReturnType<typeof setUserDataAC>;
type ActionAuthType = setUserDataACType;

export default authReducer;

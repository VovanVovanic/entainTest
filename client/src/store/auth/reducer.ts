import { AuthActionType } from "../../types"
import { SET_AUTH, SET_LOADING, SET_NAME } from "./actions"


type AuthStateType = typeof initState

const initState = {
 isLoading: false,
 username: '',
 isAuth: false
}

export const authReducer = (state: AuthStateType = initState, action: AuthActionType): AuthStateType => {
 switch (action.type) {
   case SET_LOADING:
     return { ...state, isLoading: action.payload }
   case SET_NAME:
     return { ...state, username: action.payload }
   case SET_AUTH:
     return { ...state, isAuth: action.payload}
   default: return state
 }
}

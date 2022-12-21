import { NotesActionType, NoteType } from "../../types"
import { SET_NOTES, SET_NOTES_LOADING, SET_USERS, SET_USER_MESSAGE, SET_ZINDEX } from "./actions"

type NotesStateType = typeof initState



const initState = {
  isLoading: false,
  notes: [] as Array<NoteType>,
  users: [] as Array<string>,
  biggestZindex: 1,
  userMessage: ""
}

export const notesReducer = (state: NotesStateType = initState, action: NotesActionType): NotesStateType => {
  switch (action.type) {
    case SET_NOTES_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_NOTES:
      return { ...state, notes: action.payload }
    case SET_USERS:
      return { ...state, users: action.payload }
    case SET_ZINDEX:
      return { ...state, biggestZindex: state.biggestZindex + 1 }
    case SET_USER_MESSAGE:
        return { ...state, userMessage: action.payload }
    default: return state
  }
}
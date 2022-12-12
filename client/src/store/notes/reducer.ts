import { NotesActionType, NoteType } from "../../types"
import { SET_NOTES, SET_NOTES_LOADING, SET_USERS, SET_ZINDEX } from "./actions"

type NotesStateType = typeof initState

const dummyUsers = ["User1", "Vladimir", "Olga", "Nikolasha", "John", "Sergei", "Oleg", "Pjotr"]


const initState = {
  isLoading: false,
  notes: [] as Array<NoteType>,
  users: dummyUsers as Array<string>,
  biggestZindex: 1
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
    default: return state
  }
}
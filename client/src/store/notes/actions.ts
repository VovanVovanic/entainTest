import { NoteType } from "../../types"

export const SET_NOTES_LOADING = "SET_NOTES_LOADING"
export const SET_NOTES = "SET_NOTES"
export const SET_USERS = "SET_USERS"
export const SET_ZINDEX = "SET_ZINDEX"
export const SET_USER_MESSAGE = "SET_USER_MESSAGE"

export const setNotesLoading = (loading: boolean) => {
 return { type: SET_NOTES_LOADING, payload:loading } as const
}
export const setNotes = (notes: Array<NoteType>) => {
 return { type: SET_NOTES, payload: notes} as const
}

export const setUsersOnline = (users: Array<string>) => {
 return { type: SET_USERS, payload: users} as const
}

export const setZindex = () => {
 return { type: SET_ZINDEX} as const
}

export const setMessage = (msg: string) => {
 return { type: SET_USER_MESSAGE, payload: msg} as const
}

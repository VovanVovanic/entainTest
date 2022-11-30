import { NoteType } from "../../types"

export const SET_NOTES_LOADING = "SET_NOTES_LOADING"
export const SET_NOTES = "SET_NOTES"
export const SET_USERS = "SET_USERS"

export const setNotesLoading = (loading: boolean) => {
 return { type: SET_NOTES_LOADING, payload:loading } as const
}
export const setNotes = (notes: Array<NoteType>) => {
 return { type: SET_NOTES, payload: notes} as const
}

export const setUsers = (users: Array<string>) => {
 return { type: SET_USERS, payload: users} as const
}

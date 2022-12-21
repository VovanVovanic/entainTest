import { setAuth, setAuthLoading, setName } from "./store/auth/actions";
import { setMessage, setNotes, setNotesLoading, setUsersOnline, setZindex } from "./store/notes/actions";

///auth
export type AuthLoadingType = ReturnType<typeof setAuthLoading>
export type SetNameType = ReturnType<typeof setName>
export type SetAuthType = ReturnType<typeof setAuth>

export type AuthActionType = AuthLoadingType | SetNameType | SetAuthType 

///notes
export interface NoteType{
 id: string
 authorId: string
 top: number
 left: number
 zIndex: number
 username: string
 message: string
 edit: boolean
 background: string
 isDrag: boolean
 roomId: string
}

export interface UserType{
 roomId: string
socketId: string
userId: string
userName: string
}

export type NotesLoadingType = ReturnType<typeof setNotesLoading>
export type SetNotesType = ReturnType<typeof setNotes>
export type SetUsersType = ReturnType<typeof setUsersOnline>
export type SetZindexType = ReturnType<typeof setZindex>
export type SetMessageType = ReturnType<typeof setMessage>

export type NotesActionType = NotesLoadingType | SetNotesType | SetUsersType | SetZindexType | SetMessageType 

////form data
export interface FormDataType{
 userId: string
 roomId: string
 userName: string
}
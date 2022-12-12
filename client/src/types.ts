import { setAuth, setAuthLoading, setName } from "./store/auth/actions";
import { setNotes, setNotesLoading, setUsers, setZindex } from "./store/notes/actions";

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
}

export type NotesLoadingType = ReturnType<typeof setNotesLoading>
export type SetNotesType = ReturnType<typeof setNotes>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetZindexType = ReturnType<typeof setZindex>

export type NotesActionType = NotesLoadingType | SetNotesType | SetUsersType | SetZindexType
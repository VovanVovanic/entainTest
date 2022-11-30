import { setAuth, setAuthLoading, setName } from "./store/auth/actions";
import { setNotes, setNotesLoading, setUsers } from "./store/notes/actions";

///auth
export type AuthLoadingType = ReturnType<typeof setAuthLoading>
export type SetNameType = ReturnType<typeof setName>
export type SetAuthType = ReturnType<typeof setAuth>

export type AuthActionType = AuthLoadingType | SetNameType | SetAuthType 

///notes
export interface NoteType{
 username: string;
 message: string
}

export type NotesLoadingType = ReturnType<typeof setNotesLoading>
export type SetNotesType = ReturnType<typeof setNotes>
export type SetUsersType = ReturnType<typeof setUsers>

export type NotesActionType = NotesLoadingType | SetNotesType | SetUsersType
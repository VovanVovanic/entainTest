import { NotesActionType, NoteType } from "../../types"
import { SET_NOTES, SET_NOTES_LOADING, SET_USERS } from "./actions"

type NotesStateType = typeof initState

const dummyUsers = ["User1", "Vladimir", "Olga", "Nikolasha", "John", "Sergei", "Oleg", "Pjotr"]

const dummyNotes = [{
  id: 1, username: "Vladimir", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 2, username: "Alf", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 3, username: "Sergei", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 4, username: "Anna", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 5, username: "Aleksej", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 6, username: "John", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 7, username: "Olga", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 1, username: "Vladimir", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 2, username: "Alf", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 3, username: "Sergei", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 4, username: "Anna", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 5, username: "Aleksej", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 6, username: "John", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
},
{
  id: 7, username: "Olga", message: " uhgfkrehg fdkgjltkhj fdlkgjrtkj  kbjgfklhj vklbjfgl;kh;lk; fdjghjdfh hhfgkdflhglk kv bhfgldhj "
  },

]

const initState = {
  isLoading: false,
  notes: dummyNotes as Array<NoteType>,
  users: dummyUsers as Array<string>
}

export const notesReducer = (state: NotesStateType = initState, action: NotesActionType): NotesStateType => {
  switch (action.type) {
    case SET_NOTES_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_NOTES:
      return { ...state, notes: action.payload }
    case SET_USERS:
      return { ...state, users: action.payload }
    default: return state
  }
}
import { useMemo, MouseEvent, useState, useRef, useEffect } from "react"
import { Button, Card, Form,  ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setNotes, setZindex } from "../../store/notes/actions"
import { NoteType } from "../../types"
import classes from './notes.module.scss'
import { v4 as uuidv4 } from 'uuid';
import randomColor from "randomcolor";
import useChat from "../../hooks/useChat"
import storage from "../../utils/storage"
import { USER_KEY } from "../../constant"

interface Notes {
  notes: Array<NoteType>
  currentZindex: number
}


const NotesList: React.FC<Notes> = ({ notes, currentZindex }) => {
 const { sendMessage} = useChat()
  
  const [editMode, setEditMode] = useState<boolean>(false)
  const [drag, setDrag] = useState<boolean>(false)
  const ref = useRef(null) as any
  const dispatch = useDispatch()
  const innerHeight = window.outerHeight
  const innerWidth = window.innerWidth

  const { userName, userId, roomId } = storage.get(USER_KEY)


  /// card creation
  const onNoteCreate = (e: MouseEvent<HTMLElement>) => {
    
    if (drag) return
    const target = e.target as Element;
    let top = e.pageY - 230
    let left = e.pageX - 210

    const id = uuidv4()
    const innerOffsetX = ref.current.offsetWidth
    const innerOffsetY = ref.current.offsetHeight
    const screenX = window.screen.width
    const screenY = window.screen.height
    const dX = screenX - innerWidth
    const dY = screenY - innerHeight


    ///checks if the note goes out of the border
    if (e.pageY < 230) top = 0
    if (e.pageX < 230) left = 0
    if (e.pageX > (screenX - 200 - dX)) left = innerOffsetX - 320 
    if (e.pageY > (screenY - 250 - dY)) top = innerOffsetY - 170

    ///prevent click on the note (stopPropagation not works here)
    if (!target.className.includes("list-group-horizontal")) return;


    const newNote = {
      id,
      authorId: userId,
      top,
      left,
      roomId,
      zIndex: currentZindex,
      username: userName,
      message: "",
      edit: true,
      isDrag: false,
      background: randomColor()
    }
    sendMessage(newNote)
    dispatch(setZindex())
    
  }

  /// change zIndex
  const onZindexHandler = (note: NoteType) => {
    const index = notes.findIndex((el) => el.id === note.id)
    dispatch(setZindex())
    const changedItem = {
      ...notes[index],
      zIndex: currentZindex + 1000
    }
    dispatch(setNotes([...notes.filter((el) => el.id !== changedItem.id), changedItem]))
  }


  ///editing and submitting
  const onEditHandler = (note: NoteType) => {
    const index = notes.findIndex((el) => el.id === note.id)
    const noteToEdit = { ...notes[index], edit: true }
    const newArr = [...notes.filter((el) => el.id !== noteToEdit.id), noteToEdit]
    dispatch(setNotes(newArr))
  }

  const onChangeHandler = (e: any, note: NoteType) => {
    const message = e.currentTarget.value
    const index = notes.findIndex((el) => el.id === note.id)

    const item = index != -1 ? notes[index] : note
    const newItem = {
      ...item,
      message
    }

    dispatch(setNotes([...notes.filter((el) => el.id !== newItem.id), newItem]))

  }

  const onSubmitHandler = (note: NoteType) => {
    const submittedIndex = notes.findIndex((el) => el.id === note.id)
    const changedItem = {
      ...notes[submittedIndex],
      edit: false
    }
    if (!note.message) return
    dispatch(setNotes([...notes.filter((el) => el.id !== changedItem.id), changedItem]))
    setEditMode(!editMode)

  }

  //// drag and drop functions
  const onDragStartEnd = (note: NoteType, condition: boolean) => {
    const index = notes.findIndex((el) => el.id === note.id)
    const changedItem = {
      ...notes[index],
      isDrag: condition
    }
    dispatch(setNotes([...notes.filter((el) => el.id !== changedItem.id), changedItem]))
    setDrag(condition)
  }

  const onDragMove = (e: React.MouseEvent<HTMLElement, any>, note: NoteType) => {
    const dx = e.movementX
    const dy = e.movementY
    if (note.isDrag) {
      const index = notes.findIndex((el) => el.id === note.id)
      let top = notes[index].top + dy
      let left = notes[index].left + dx

      const innerOffsetX = ref.current.offsetWidth
      const innerOffsetY = ref.current.offsetHeight
      const screenX = window.screen.width
      const screenY = window.screen.height
      const dX = screenX - innerWidth
      const dY = screenY - innerHeight

      if (top <= 0) top = 0
      if (left <= 0) left = 0
      if (left >= (screenX - 400 - dX)) left = innerOffsetX - 320
      if (top >= (screenY - 470 - dY)) top = innerOffsetY - 170

      const changedItem = {
        ...notes[index],
        top,
        left
      }
      dispatch(setNotes([...notes.filter((el) => el.id !== changedItem.id), changedItem]))
    }
  }

/// cards UI memoization
  const notesList = useMemo(() => {
    return notes.map((el) => {
      const top = `${el.top}px`
      const left = `${el.left}px`
      const zIndex = `${el.zIndex}px`

      return (
        <Card
          style={{
            width: '20rem',
            top: top,
            left: left,
            zIndex: zIndex,
          }}
          className={classes.item}
          key={el.id}
          data-id={el.id}
          onMouseDown={() => onDragStartEnd(el, true)}
          onMouseMove={(e) => onDragMove(e, el)}
          onMouseUp={(e) => onDragStartEnd(el, false)}
        >
          <Card.Body >
            <Card.Title
              className="d-flex justify-content-between"
              onClick={() => onZindexHandler(el)}
              style={{ padding: "0 0 0 5px" }}
            >
              {el.username}
            </Card.Title>
            <Card.Text
            as="div"
            >
              {el.edit ? <div className={classes.textEditContent}>
                <Form.Control
                  as="textarea"
                  value={el.message}
                  onChange={(e) => onChangeHandler(e, el)}
                  onClick={() => onZindexHandler(el)}
                  style={{ background: el.background }}
                />
                <Button
                  variant="outline-primary"
                  size="sm" style={{ margin: " 0 5px" }}
                  onClick={() => onSubmitHandler(el)}
                >Submit</Button>
              </div > :
                <>
                  <p
                    onClick={() => onZindexHandler(el)}
                    style={{
                      height: "67px",
                      textAlign: "left",
                      border: "1px solid grey",
                      borderRadius: "10px",
                      margin: "5px",
                      padding: "5px",
                      overflowY: "auto",
                      background: el.background
                    }}>{el.message}</p>
                  <span style={{ padding: "0px", display: "flex", }}>
                    <Button
                      variant="outline-secondary"
                      size="sm" style={{ margin: " 0 5px" }}
                      onClick={() => onEditHandler(el)}
                    >Edit</Button>
                    <Button
                      variant="outline-danger"
                      size="sm" style={{ margin: " 0 5px" }}
                    >Delete</Button>
                  </span>
                </>
              }
            </Card.Text>

          </Card.Body>
        </Card>
      )
    }

    )
  }, [notes, editMode])


  return (
    <>
      <ListGroup
        ref={ref}
        horizontal
        className={classes.notes}
        onClick={(e) => onNoteCreate(e)}
      >
        {notes.length ?
          notesList :
          <>"No records yet. Why don't you create some?"</>}
      </ListGroup>
    </>
  )
}

export default NotesList
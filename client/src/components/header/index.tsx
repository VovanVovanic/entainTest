import { ReactNode } from "react"
import { Navbar, Container, Button } from "react-bootstrap"
import AddItemForm from "../addItemForm"
import classes from './header.module.scss'


interface Header{
 children?: ReactNode
}
const Header:React.FC<Header> = ({children}) => {
 return (
  <Navbar bg="primary" variant="dark" className={classes.header}>
   <h4 className={classes.title}>Drag & Drop Notes Cards</h4>
   <AddItemForm/>
   <div className="justify-content-end">
   <Button variant="light">Exit</Button>
   </div>
 </Navbar>
 )
}

export default Header
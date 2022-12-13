import { ReactNode } from "react"
import { Navbar, Container, Button } from "react-bootstrap"
import classes from './header.module.scss'
import { USER_KEY } from '../../constant'
import storage from '../../utils/storage'


interface Header{
 children?: ReactNode
}
const Header: React.FC<Header> = ({ children }) => {
  
  const onExit = () => {
    storage.remove(USER_KEY)

    window.location.reload()
  }
 return (
  <Navbar bg="primary" variant="dark" className={classes.header}>
   <h4 className={classes.title}>Drag & Drop Notes Cards</h4>
   <div className="justify-content-end">
       <Button
         onClick={onExit}
         variant="light">Exit</Button>
   </div>
 </Navbar>
 )
}

export default Header
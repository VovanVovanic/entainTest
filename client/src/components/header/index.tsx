import { Navbar, Container, Button } from "react-bootstrap"
import classes from './header.module.scss'

const Header = () => {
 return (
  <Navbar bg="primary" variant="dark" className={classes.header}>
  <Container>
   <h4 className={classes.title}>Darg & Drop Notes Cards</h4>
   <div className="justify-content-end">
   <Button variant="light">Exit</Button>
   </div>
  </Container>
 </Navbar>
 )
}

export default Header
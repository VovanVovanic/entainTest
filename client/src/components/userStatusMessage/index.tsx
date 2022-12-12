import classes from './userStatus.module.scss'

interface StatusMessage{
 name: string
 status: string
}
const UserStatusMessage:React.FC<StatusMessage> = ({ status, name }) => {
 return (
  <div className={classes.userStatus}>
   {`${name} ${status} the chat.`}
  </div>
 )
}
export default UserStatusMessage

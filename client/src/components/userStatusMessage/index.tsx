import classes from './userStatus.module.scss'

interface StatusMessage{
 status: string
}
const UserStatusMessage:React.FC<StatusMessage> = ({ status }) => {
 return (
  <div className={classes.userStatus}>
   {status}
  </div>
 )
}
export default UserStatusMessage

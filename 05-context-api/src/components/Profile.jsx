import  { useContext } from 'react'
import UserContext from '../context/UserContext';

//Step 4 : From The Context The Data we get  

const Profile = () => {
    const { user } = useContext(UserContext)
    
    if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
      <p> More Componets</p>
      <h1> Profile : {user.userName}</h1>
    </div>
  );
}

export default Profile
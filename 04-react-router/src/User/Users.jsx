import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userId}  = useParams()
  return (
    <div className="w-full h-20 text-center text-white text-3xl bg-orange-700">
      <p className='pt-5'> Users : {userId}</p>
    </div>
  );
}

export default User
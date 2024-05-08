import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch("https://api.github.com/users/iamtheSk")
            .then((response) => response.json())
            .then(data => { console.log(data); setData(data)})
    },[]);
    return (
      <div className="w-full bg-gray-700  flex items-center justify-center">
            <img src={data.avatar_url} alt="Image" className=' w-20 ' />
            <p className="text-3xl text-white py-5 ">Github Info of {data.name}</p>
      </div>
    );
}

export default Github;
import React, { useState } from 'react'

import UserContext from './UserContext'

//Step 2 : Create User wrapper

const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
}

export default UserContextProvider
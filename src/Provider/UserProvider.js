import React, { createContext, useState } from 'react';

export const userContext = createContext();

const UserProvider = ({children}) => {
    const [psychiatrist, setpsychiatrist  ] = useState({});

    const userInfo = {
        psychiatrist,
        setpsychiatrist
    }
    return (
        <userContext.Provider value={userInfo}>
        {children}
       </userContext.Provider>
    );
};

export default UserProvider;
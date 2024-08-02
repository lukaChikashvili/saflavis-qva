import React, { createContext, useState } from 'react'

export const UserContext = createContext();


const UserProvider = ({ children }) => {
 
    // textures
    const [textureModal, setTextureModal] = useState(false);

    return (
        <UserContext.Provider value = {{textureModal, setTextureModal}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

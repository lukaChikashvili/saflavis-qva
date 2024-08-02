import React, { createContext, useState } from 'react'

export const UserContext = createContext();


const UserProvider = ({ children }) => {
 
    // textures
    const [textureModal, setTextureModal] = useState(false);

    // texture change
    const [mainTexture, setMainTexture] = useState('https://github.com/nidorx/matcaps/raw/master/thumbnail/0C430C_257D25_439A43_3C683C.jpg');

    return (
        <UserContext.Provider value = {{textureModal, setTextureModal, mainTexture, setMainTexture}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

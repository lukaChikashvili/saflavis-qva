import React, { createContext, useState } from 'react'

export const UserContext = createContext();


const UserProvider = ({ children }) => {
 
    // textures
    const [textureModal, setTextureModal] = useState(false);

    // texture change
    const [mainTexture, setMainTexture] = useState('https://github.com/nidorx/matcaps/raw/master/thumbnail/0C430C_257D25_439A43_3C683C.jpg');

     // more textures
     const [moreTexture, setMoreTexture] = useState(false);
     
     // text
     const [showText, setShowText] = useState(false);

    // change name
    const [yourName, setYourName] = useState('');
    // change surname
    const [surname, setSurname] = useState('');

    // add image
    const [img, setImg] = useState(false);
    return (
        <UserContext.Provider 
        value = {{textureModal, 
                 setTextureModal,
                 mainTexture, 
                 setMainTexture, 
                 moreTexture, 
                 setMoreTexture, 
                 showText, 
                 setShowText,
                 yourName,
                 setYourName, 
                 surname, 
                 setSurname,
                 img,
                 setImg
                 }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

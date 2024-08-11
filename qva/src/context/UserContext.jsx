import React, { createContext, useState } from 'react'

export const UserContext = createContext();


const UserProvider = ({ children }) => {
 
    // textures
    const [textureModal, setTextureModal] = useState(false);

    // texture change
    const [mainTexture, setMainTexture] = useState('https://github.com/nidorx/matcaps/raw/master/thumbnail/767989_323437_B6C4EE_343C44.jpg');

     // more textures
     const [moreTexture, setMoreTexture] = useState(false);
     
     // text
     const [showText, setShowText] = useState(false);

    // change name
    const [yourName, setYourName] = useState('');
    // change surname
    const [surname, setSurname] = useState('');

    // change year
    const [year, setYear] = useState(false);

    // add image
    const [img, setImg] = useState(false);

    // img url
    const [url, setUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png');

    // show cloth
    const [cloth, setCloth] = useState(false);

    const [textColor, setTextColor] = useState('black');

    // change language
    const [lang, setLang] = useState(false);
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
                 setImg,
                 url, 
                 setUrl,
                 cloth,
                 setCloth,
                 year,
                 setYear,
                 textColor, 
                 setTextColor,
                 lang, 
                 setLang
                 }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

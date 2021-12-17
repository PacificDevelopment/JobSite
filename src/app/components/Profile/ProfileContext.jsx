/*eslint-disable*/
import React, { useState, createContext } from 'react';


export const ProfileContext = createContext(null)

const ProfileProvider = (props) => {
  let [disabled, setDisabled] = useState(true);
  let [PDFFile, setPDFFile] = useState({});
  let [first_name, setFirst] = useState('')
  let [last_name, setLast] = useState('')
  let [email, setEmail] = useState('')
  let [street_address, setStreet] = useState('')
  let [city, setCity] = useState('')
  let [homeState, setHomeState] = useState('')
  let [zip, setZip] = useState('')
  let [phone_number, setPhone] = useState('')
  let [avatarURL, setAvatarURL] = useState('')

  return (
    <ProfileContext.Provider value={{
      PDFFile,
      setPDFFile,
      avatarURL,
      setAvatarURL,
      disabled,
      setDisabled,
      first_name,
      setFirst,
      last_name,
      setLast,
      email,
      setEmail,
      street_address,
      setStreet,
      city,
      setCity,
      homeState,
      setHomeState,
      zip,
      setZip,
      phone_number,
      setPhone,
    }}>
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
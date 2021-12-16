import React, { useState, createContext } from 'react';


export const ProfileContext = createContext(null)

const ProfileProvider = (props) => {

  let [first_name, setFirst] = useState('First')
  let [last_name, setLast] = useState('Last')
  let [email, setEmail] = useState('email@example.com')
  let [street_address, setStreet] = useState('123 Street Rd')
  let [city, setCity] = useState('San Francisco')
  let [state, setState] = useState('CA')
  let [zip, setZip] = useState(94102)
  let [phone_number, setPhone] = useState('(415) 555-1212')

  return (
    <ProfileContext.Provider value={{
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
      state,
      setState,
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
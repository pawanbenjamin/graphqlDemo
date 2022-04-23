import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_PERSON, ALL_PERSONS } from './queries'

const AuthForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')

  const [createPerson] = useMutation(CREATE_PERSON, {
    variables: { name, street, city, phone },
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    },
  })

  return (
    <div>
      <h3>ADD A PERSON</h3>
      {error ? error : null}
      <input
        value={name}
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={phone}
        type="text"
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        value={street}
        type="text"
        placeholder="street"
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        value={city}
        type="text"
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={() => {
          createPerson()
          setName('')
          setStreet('')
          setPhone('')
          setCity('')
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default AuthForm

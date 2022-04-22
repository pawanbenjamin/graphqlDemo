import React, { useState } from 'react'

const AuthForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  return (
    <div>
      <form>
        <input
          value={name}
          type="text"
          placeholder="name"
          onClick={(e) => setName(e.target.value)}
        />
        <input
          value={phone}
          type="text"
          placeholder="phone"
          onClick={(e) => setPhone(e.target.value)}
        />
        <input
          value={street}
          type="text"
          placeholder="street"
          onClick={(e) => setStreet(e.target.value)}
        />
        <input
          value={city}
          type="text"
          placeholder="city"
          onClick={(e) => setCity(e.target.value)}
        />
      </form>
    </div>
  )
}

export default AuthForm

import React from 'react'

import { useQuery } from '@apollo/client'

import AuthForm from './AuthForm'

import { ALL_PERSONS } from './queries'

function App() {
  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>Loading...</div>
  }

  console.log(result.data)

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>People:</h3>
      {result.data.allPersons.map((person, i) => (
        <h4 key={`key: ${i}`}>{person.name}</h4>
      ))}
      <AuthForm />
    </div>
  )
}

export default App

import React from 'react'

import { useQuery, gql } from '@apollo/client'

import AuthForm from './AuthForm'

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`

function App() {
  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Hellllooooo</h3>
      {result.data.allPersons.map((person, i) => (
        <h4 key={`key: ${i}`}>{person.name}</h4>
      ))}
      <AuthForm />
    </div>
  )
}

export default App

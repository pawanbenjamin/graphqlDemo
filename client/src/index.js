import { createRoot } from 'react-dom/client'
import App from './App'

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

const container = document.getElementById('root')
const root = createRoot(container)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
})

// const query = gql`
//   query {
//     allPersons {
//       name
//       phone
//       address {
//         street
//         city
//       }
//       id
//     }
//   }
// `

// client.query({ query }).then((res) => console.log(res))

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

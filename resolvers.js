const { UserInputError } = require('apollo-server')
const { v1: uuid } = require('uuid')

const { prisma } = require('./prisma')

const resolvers = {
  Query: {
    personCount: async () => await prisma.person.findMany({}).length,
    allPersons: async (root, args) => {
      if (!args.phone) {
        return await prisma.person.findMany({})
      }
      if (args.phone === 'YES') {
        return await prisma.person.findMany({
          where: {
            phone: true,
          },
        })
      }
    },
    findPerson: async (root, args) =>
      await prisma.findUnique({
        where: {
          name: args.name,
        },
      }),
  },
  Person: {
    address: (root) => {
      return {
        street: root.street,
        city: root.city,
      }
    },
  },
  Mutation: {
    addPerson: async (root, args) => {
      const person = await prisma.person.findUnique({
        where: {
          name: args.name,
        },
      })
      if (person) {
        throw new UserInputError('Name must be unique', {
          invalidArgs: args.name,
        })
      }
      const newPerson = await prisma.person.create({
        data: args,
      })
      return newPerson
    },
    editNumber: (root, args) => {
      const person = persons.find((p) => p.name === args.name)
      if (!person) {
        return null
      }
      const updatedPerson = { ...person, phone: args.phone }
      persons = persons.map((p) => (p.name === args.name ? updatedPerson : p))
      return updatedPerson
    },
  },
}

module.exports = resolvers

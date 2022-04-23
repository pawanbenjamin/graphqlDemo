const { UserInputError } = require('apollo-server')

const prisma = require('./prisma')

const resolvers = {
  Query: {
    personCount: async () => {
      const people = await prisma.Person.findMany()
      return people.length
    },
    allPersons: async (root, args) => {
      if (!args.phone) {
        return await prisma.Person.findMany()
      }
      if (args.phone === 'YES') {
        return await prisma.Person.findMany({
          where: {
            phone: true,
          },
        })
      }
    },
    findPerson: async (root, args) => {
      const person = await prisma.Person.findFirst({
        where: {
          name: args.name,
        },
      })
      return person
    },
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
      const person = await prisma.Person.create({
        data: args,
      })
      console.log('Person', person)
      // if (!person) {
      //   throw new UserInputError('Name must be unique', {
      //     invalidArgs: args.name,
      //   })
      // }
      return person
    },
    editNumber: async (root, args) => {
      const person = await prisma.Person.update({
        where: {
          name: args.name,
        },
        data: {
          number: args.number,
        },
      })
    },
  },
}

module.exports = resolvers

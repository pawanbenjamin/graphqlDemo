const prisma = require('./prisma')
const { persons } = require('./data')

const dropTables = async () => {
  console.log('...dropping tables')
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Person";`
  console.log('...tables dropped')
}

const createTables = async () => {
  console.log('...creating tables')
  await prisma.$executeRaw`
    CREATE TABLE "Person" (
        "id" SERIAL NOT NULL,
        "name" VARCHAR(255) NOT NULL,
        "phone" VARCHAR (255),
        "street" TEXT NOT NULL,
        "city" TEXT NOT NULL,

        CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
    );
`
}

const seedPeople = async () => {
  for (const person of persons) {
    const madePerson = await prisma.person.create({ data: person })
    console.log(madePerson)
  }
}

const buildDb = async () => {
  try {
    await dropTables()
    await createTables()
    await seedPeople()
  } catch (error) {
    console.error(error)
  } finally {
    prisma.$disconnect()
  }
}

buildDb()

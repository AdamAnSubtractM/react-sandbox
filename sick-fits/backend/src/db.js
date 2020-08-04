// This files connects to the remote Prisma DB & gives us the 
// ability to query it w/JS
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true
});

module.exports = db;
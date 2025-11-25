const async = require('fastify')({
  logger: true 
})

async.get('/' , function(bob, dod){
  return({ hello:'bob is brother of dod'})
})
const salam= async () => {
  try {
    await async.listen({ port: 3000 })
  } catch (err) {
    async.log.error(err)
    process.exit(1)
  }
}
salam()
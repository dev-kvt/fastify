const fastify = require('fastify')({
  logger:true 
})

//declare a route 
fastify.get('/' , function(req , res ) {
  res.send({hello: "jupiter"})
  res.send({wow: "hello "})
})

//register plugins
fastify.register(require("@fastify/cors"))
fastify.register(require("@fastify/env"),{
  dotenv:true,
  schema:{
    type:"object",
    required:['PORT' , 'MONGODB_URI' , 'JWT_TOKEN'],
    properties:{
      PORT: {type:string , default : 3000},
      MONOGODB_URI:{
        type:string 
      },
      JWT_TOKEN:{
        type:string
      }
    }
  }
})
fastify.register(require("@fastify/sensible"))
//register custom plugins
fastify.register(require("./plugins/mongodb"))

//test db connection 
fastify.get("/test-db" , async(request , response) => {
  try{
  const mongo = x.mongoose
 const connectionState = mongoose.connection.readyState
 
 let status = ""
 switch (connectionState)
 {
   case 0:
    status ="disconnected",
     break;
  case 1:
  
   
   
 }
  }
  catch(err) 
  {
    
  }
})
fastify.listen({port : 3000 } , function ( err, add) {
  if(err){
    fastify.log.error(err)
    process.exit(1)
  }
})
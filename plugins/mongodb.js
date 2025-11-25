const x = require("fastify");
const y = require("fastify-plugins")
const mon = require('mongoose')

module.exports = y(async (x, opts) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    x.decorate('mongoose', mongoose);
    x.log.info("mongodb connected!!");
  }
  catch (err) {
    x.log.error(err);
    process.exit(1);
  }
});
let dotenv = require('dotenv')
dotenv.config()

module.exports = {
    apps : [{
      name   : process.env.name || "test-beehive",
      script : "npm",
      args   : "start",
      watch  : false,
      env    : process.env,
      max_memory_restart: "2500M",
      out:"/dev/null"
    }]
  }
  
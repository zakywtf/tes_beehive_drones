const envVar = require('./env.js');

module.exports = {
    apps : [{
      name   : envVar.name || "test-beehive",
      script : "npm",
      args   : "start",
      watch  : false,
      env    : envVar,
      max_memory_restart: "2500M",
      out:"/dev/null"
    }]
  }
  
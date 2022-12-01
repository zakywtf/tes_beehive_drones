
module.exports = {
    apps : [{
        name   : "test-beehive",
        script : "npm",
        args   : "start",
        watch  : false,
        env    : {
            NODE_ENV: "development",
        },
        max_memory_restart: "2500M",
        out:"/dev/null"
    }]
  }
  
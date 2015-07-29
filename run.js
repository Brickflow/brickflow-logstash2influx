var logstash2influx = require('logstash2influx');

logstash2influx({
  influx: {
    host: 'raiden.brickflow.com',
    port: 8086,
    username: 'root',
    password: 'password',
    database: 'stats'
  },
  logstash: {
    host: 'localhost',
    port: 8099
  }
})

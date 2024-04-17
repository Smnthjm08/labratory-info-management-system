const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "limsmaster"
});
console.log("dB is connected to port 5432")

module.exports = pool;
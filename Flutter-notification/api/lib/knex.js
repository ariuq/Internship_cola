const knex = require("knex");

const keyx = knex({
  client: "mssql",
  connection: {
    server: "DESKTOP-U7O62H5",
    user: "sa",
    password: "20030320",
    database: "master",
  },
});

module.exports = { keyx };
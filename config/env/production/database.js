//const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  //const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi')
      },
      debug: false,
    },
  };
};
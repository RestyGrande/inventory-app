module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 3360,
    db: process.env.DB_DATABASE || "development",
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.TEST_DB_USERNAME || "root",
    password: process.env.TEST_DB_PASSWORD || "",
    host: process.env.TEST_DB_HOST || "localhost",
    port: parseInt(process.env.TEST_DB_PORT) || 3360,
    db: process.env.TEST_DB_DATABASE || "test",
    dialect: "mysql",
  },
};

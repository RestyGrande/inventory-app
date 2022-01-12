const Sequelize = require("sequelize");
import { registerModel } from "../models";

class Database {
  constructor(username, password, host, port, dialect, database) {
    this.username = username;
    this.password = password;
    this.host = host;
    this.port = port;
    this.dialect = dialect;
    this.database = database;
  }
  async connect() {
    try {
      this.connect = new Sequelize(
        this.database,
        this.username,
        this.password,
        {
          host: this.host,
          dialect: this.dialect,
        }
      );
      await this.connect.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

    registerModel(this.connect);

    await this.synced();
    return this.connect;
  }
  async disconnect() {
    try {
      await this.connnect.close();
      console.log("Connection to the database has been closed succesfully");
    } catch (error) {
      console.error("Unable to close  the database:", error);
    }
  }
  async synced() {
    try {
      await this.connect.sync({
        force: false,
      });

      console.log("Connection synced successfully");
    } catch (error) {
      console.log("Connection failed  synced successfully", error);
    }
  }
}
module.exports = Database;

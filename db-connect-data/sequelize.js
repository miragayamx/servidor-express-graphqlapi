const sequelizeConnectData = {
  sqllite: {
    dialect: "sqlite",
    storage: "./data/sqlLite/BD.sqlite",
  },
  mariadb: {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
      user: "root",
	  password: "",
      database: "ecommerce",
    },
  },
};

module.exports = sequelizeConnectData;

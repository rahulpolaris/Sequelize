const { Sequelize } = require('sequelize')



async function main(){
const sequelize = new Sequelize('posts', 'rahul', '!Password5555', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  try {
    const a = await sequelize.authenticate();
    console.log(a)
    console.log('Connection has been established successfully.');
    //  sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main()
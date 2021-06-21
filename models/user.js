'use strict';
// import { UUIDV4 } from 'sequelize';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      this.hasMany(Post,{foreignKey:{name:'userid'}})
      // define association here
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  };
  User.init({
    // id:{
    //   type:DataTypes.INTEGER(11),
    //   autoIncrement:true
    // },
    userid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      // primaryKey:true

    },

    name: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"John"
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"client" 
    },
    number: {
      type:DataTypes.BIGINT(15),
      allowNull:false ,
      defaultValue:919582558296
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};
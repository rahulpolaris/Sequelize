"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      const options = {
        foreignKey: { name: "userid" },
      };
      this.belongsTo(User, options);
      // define association here
    }
    toJSON() {
      return { ...this.get(), id: undefined, userid: undefined };
    }
  }
  Post.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  );
  return Post;
};

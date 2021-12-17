'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  like_comment.init({
    // user_id: DataTypes.INTEGER,
    // item_id: DataTypes.INTEGER,
    like: DataTypes.TINYINT,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'like_comment',
  });
  return like_comment;
};
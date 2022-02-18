"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.Post, { foreignKey: "post_id" })
    Like.belongsTo(models.User, { foreignKey: "user_id" })
  };
  return Like;
};

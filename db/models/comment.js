"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comment: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.Post, { foreignKey: "post_id" });
    Comment.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Comment;
};

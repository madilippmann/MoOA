"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      path: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: "user_id" });
    Post.hasMany(models.Comment, { foreignKey: "post_id" });

    const columnMapLike = {
      through: "Like",
      foreignKey: "post_id",
      otherKey: "user_id",
    };

    Post.belongsToMany(models.User, columnMapLike);


  };
  return Post;
};

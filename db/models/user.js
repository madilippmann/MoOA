"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      avatar_path: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Post, { foreignKey: "user_id" });
    User.hasMany(models.Comment, { foreignKey: "user_id" });

    const columnMapFollowing = {
      through: "Follower",
      foreignKey: "follower_id",
      otherKey: "user_id",
      as: "followings",
    };
    const columnMapFollower = {
      through: "Follower",
      foreignKey: "user_id",
      otherKey: "follower_id",
      as: "followers",
    };
    User.belongsToMany(models.User, columnMapFollowing);
    User.belongsToMany(models.User, columnMapFollower);
    User.hasMany(models.Like, { foreignKey: "user_id"})
  };
  return User;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    user_id: DataTypes.INTEGER,
    follower_id: DataTypes.INTEGER
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};
npx sequelize model:generate --name User --attributes username:string,hashedPassword:string,firstName:string,lastName:string,email:string

npx sequelize model:generate --name Post --attributes user_id:integer,path:text,title:string,description:text

npx sequelize model:generate --name Comment --attributes post_id:integer,user_id:integer,comment:text

npx sequelize model:generate --name Follower --attributes user_id:integer,follower_id:integer

npx sequelize model:generate --name Like --attributes user_id:integer,post_id:integer

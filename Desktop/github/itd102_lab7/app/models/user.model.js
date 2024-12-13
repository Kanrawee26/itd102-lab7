const { type } = require("express/lib/response");

module.exports = ( sequelize , dataType ) => {          // () => {}; คือฟังก์ชั่น  
    const User = sequelize.define("users" , {
        id : {
              type : dataType.INTEGER,
              autoIncrment : true,
              allowNull : false,
              primaryKey : true
        },
        name : {
                type : dataType.STRING,
                allowNull : false

        }
    });
    return User;
};

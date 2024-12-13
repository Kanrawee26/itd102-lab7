const config = require('../config/db');

const dataType = require('sequelize');
const sequelize = new dataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host : config.HOST,
        dialect : config.dialect
    }
);

const db = {}; // อ๊อบเจ็ต เปล่า ไม่มีค่าอยู่ข้างใน

db.dataType = dataType;  
db.sequelize = sequelize;

db.user = require("./user.model")( sequelize , dataType ); 

module.exports = db; // เป็นการส่ง db ทั้งหมด
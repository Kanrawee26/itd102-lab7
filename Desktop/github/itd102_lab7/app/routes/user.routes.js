const controller = require('../controlleers/user.controller');//../คือถอยออกจากไฟล์


module.exports = (app) => {
    app.get("/",controller.home);    // get ใช้เบาว์เซอร์ดูได้เลย 
    app.get("/about",controller.about);  
    app.get("/contact",controller.contact);  

};
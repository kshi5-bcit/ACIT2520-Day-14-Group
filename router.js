var HomeController = require('./Controllers/HomeController');

var KevinShiController = require('./Controllers/KevinShiController');

var KevinCheeController = require('./Controllers/KevinCheeController')

// Routes
module.exports = function(app){
    // Main Routes
    app.get('/',      HomeController.Index);
    app.post('/Home/ReceiveForm', HomeController.ReceiveForm);

    app.get('/KevinShi', KevinShiController.KevinShi);
    app.get('/KevinChee', KevinCheeController.KevinChee);
};

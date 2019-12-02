var HomeController = require('./Controllers/HomeController');

var KevinShiController = require('./Controllers/KevinShiController');

var KevinCheeController = require('./Controllers/KevinCheeController')
var TristanPController = require('./Controllers/TristanPController');

// Routes
module.exports = function(app){
    // Main Routes
    app.get('/',      HomeController.Index);
    app.post('/Home/ReceiveForm', HomeController.ReceiveForm);
    app.get('/KevinShi', KevinShiController.KevinShi);
    app.get('/KevinChee', KevinCheeController.KevinChee);
    app.get('/TristanP', TristanPController.TristanP);
    app.get('SharleneTan', SharleneTan.SharleneTan)
};

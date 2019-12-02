var HomeController = require('./Controllers/HomeController');

var KevinShiController = require('./Controllers/KevinShiController');

<<<<<<< HEAD
var KevinCheeController = require('./Controllers/KevinCheeController')
=======
var TristanPController = require('./Controllers/TristanPController');
>>>>>>> 542332eeef14cde5f09e522e81c10bdf42f89054

// Routes
module.exports = function(app){
    // Main Routes
    app.get('/',      HomeController.Index);
    app.post('/Home/ReceiveForm', HomeController.ReceiveForm);
    app.get('/KevinShi', KevinShiController.KevinShi);
<<<<<<< HEAD
    app.get('/KevinChee', KevinCheeController.KevinChee);
=======
    app.get('/TristanP', TristanPController.TristanP);
    app.get('SharleneTan', SharleneTan.SharleneTan)
>>>>>>> 542332eeef14cde5f09e522e81c10bdf42f89054
};

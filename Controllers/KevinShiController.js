// Kevin Shi's controller
exports.KevinShi = async function(request, response){
    let classes = ["Business Systems Analysis", "Web Development"];
    response.render('KevinShi/KevinShi', { classes:classes })
};

exports.SharleneTan = async function(request, response){
    let classes = ["Scripting", "Web Development"];
    response.render('SharleneTan/SharleneTan', { classes:classes })
};
// Kevin Shi's controller
exports.KevinShi = async function(request, response){
    let classes = ["Business Systems Analysis", "Web Development"];
    response.render('KevinShi/KevinShi', { classes:classes })
};
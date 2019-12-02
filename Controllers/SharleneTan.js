exports.SharleneTan = async function(request, response){
    let classes = ["Scripting", "Web Development"];
    response.render('SharleneTan/SharleneTan', { classes:classes })
};
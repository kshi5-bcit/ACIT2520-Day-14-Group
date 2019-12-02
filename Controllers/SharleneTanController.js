exports.SharleneTan = async function(request, response){
    let words = ["hello", "there"];
    response.render('SharleneTan/SharleneTan', { words:words })
};
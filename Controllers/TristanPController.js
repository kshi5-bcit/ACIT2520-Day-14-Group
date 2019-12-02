exports.TristanP = async function(request, response){
    let foods = ["Pizza", "Sushi"];
    response.render('TristanP/TristanP', { foods:foods })
};
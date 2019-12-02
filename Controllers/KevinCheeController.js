exports.KevinChee = async function(req,res) {
    let name = 'Kevin Chee'
    let colour = 'Blue'
    res.render('KevinChee/index', { name: name, colour: colour })
}

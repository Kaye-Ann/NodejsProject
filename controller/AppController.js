const main = {
    index: (req,res) => {
        res.render('index');
    },
    adarlo: (req,res) => {
        res.render('adarlo');
    },
    kaye: (req,res) => {
        res.render('kaye');
    },
    ann: (req,res) => {
        res.render('ann');
    },
    gida: (req,res) => {
        res.render('gida');
    },
}
module.exports = main;
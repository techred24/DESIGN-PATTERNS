var express = require('express');
var router = express.Router();

const QuoterContext = require('../quoter/quotercontext');
const LocalStrategy = require('../quoter/localstrategy');
const LocalWithTaxStrategy = require('../quoter/localwithtaxstrategy');
const gain = 1.3;
const IVA = 16;
router.get('/local', (req, res, next) => {
    const quoter = new QuoterContext(new LocalStrategy(), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    console.log(total, 'TOTAL')
    res.json(total);
});
router.get('/localwithtax', (req, res, next) => {
    const quoter = new QuoterContext(new LocalWithTaxStrategy(IVA), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    console.log(total, 'TOTAL WITH TAX')
    res.json(total);
});

module.exports = router;
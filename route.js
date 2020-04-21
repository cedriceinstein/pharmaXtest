const express = require ('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('ok');
 });

Router.post('/', (req, res) => {
    res.send('ca marche bien');

    console.log(req.body);
});

module.exports = Router;
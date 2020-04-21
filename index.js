const express = require('express');
const Router = require('./route');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Initialization
var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecole'
});

mysqlJson.connect((err) => {
    if (!err)
        console.log('connexion ok');
    else
        console.log('erreur de connexion');
});

app.listen(3000, () => {
    console.log('Server en ecoute sur le port 3000');
});

//select all
app.get('/etudiants', (req, res) => {
  // requete
    mysqlJson.query('SELECT * FROM etudiant;', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});

//GET
app.get('/etudiants/:id', (req, res) => {
    // requete
    mysqlJson.findByPrimaryKey('etudiant', req.params.id, function(err, rows, fields) {
        if (!err) res.send(rows);
    });
});


//select all
app.get('/etudiants', (req, res) => {
    // requete
    mysqlJson.query( "SELECT * FROM etudiant", (err, rows, fields) => {
        if (!err)  res.send(rows);
    });
});

//UPDATE
app.get('/etudiants/:id', (req, res) => {
   mysqlJson.update( 'etudiant',
        {nom:'DOE', prenom:'John', date_naissance:'10-10-10', sexe:'FEMININ', filiere:'AL'},
        {id:{operator:'=', value: req.params.id}},
        (err, rows, fields) => {
            if (!err) res.send(rows);
            console.log(rows);
        });
});

//DELETE
app.get('/etudiants/delete/:id', (req, res)=>{
    mysqlJson.delete(
        'etudiant',
        {id:{operator:'=', value:req.params.id}},
        (err, rows, fields) =>{
            if (!err) res.send(rows);
        });
});

//INSERT
app.get('/etudiants/insert', (req, res)=>{
    mysqlJson.insert(
        'etudiant',
        {nom:'OBAMA', prenom:'Barack', date_naissance: "01-01-01", sexe:"M", filiere: "SRS"},
        (err, rows, fields) => {
            if (!err) res.send(rows);
        });
});

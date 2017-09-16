var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8000;
app.use(bodyParser.json())

patientList = require('./models/patientList.js');

mongoose.connect('mongodb://ahmer:24637@ds149373.mlab.com:49373/patientdata',{
    useMongoClient: true,
  });
var db = mongoose.connection;

app.get('/api/patientdata', function(req ,res){
    patientList.getPatients(function(err, patient){
        if(err){
            throw err
        }
        res.json(patient)
    })
});
app.post('/api/patientdata', function(req ,res){
    var patient = req.body;
    patientList.addPatient(patient,function(err, patient){
        if(err){
            throw err
        }
        res.json(patient)
    })
});
app.delete('/api/patientdata', function(req ,res){
    var data = req.body.id
    patientList.removePatient(data, function(err, patient){
        if(err){
            throw err
        }
        res.json(patient)
    })
});
app.listen(port)
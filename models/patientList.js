var mongoose = require( 'mongoose' );

var patientSchema = mongoose.Schema({
    date : {
        type : String,
    },
    name : {
        type : String,
    },
    disease : {
        type : String,
    },
    medication : {
        type : String,
    },
    cost : {
        type : String,
    },
});

var patientList = module.exports = mongoose.model('patientdatas',patientSchema);

module.exports.getPatients = function(callback){
    patientList.find(callback)
}
module.exports.addPatient = function(patient,callback){
    patientList.create(patient,callback)
}

module.exports.removePatient = function(id,callback){
    var query = {_id:id}
    patientList.remove(query,callback)
}
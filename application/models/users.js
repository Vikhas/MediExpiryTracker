var mongoose  =  require('mongoose');  


var userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    medname:{
        type:String
    },
    expdate:{
        type:String
    }
    
});

module.exports = mongoose.model('Users',userSchema);
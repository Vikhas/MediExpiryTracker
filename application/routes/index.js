const express = require('express');
const router = express.Router();
const Users = require('../models/users');
var multer      = require('multer');  


//Importing jimp module
var Jimp = require("jimp");
// Importing filesystem module
var fs = require('fs')

const { promisify } = require('util');

const unlinkAsync = promisify(fs.unlink);
// Importing qrcode-reader module
var qrCode = require('qrcode-reader');

// Read the image and create a buffer
// (Here image.png is our QR code)
var buffer = fs.readFileSync(__dirname + '/qr-code.png');


var storage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
    cb(null,'public/assets/uploads/');  
    },  
    filename:(req,file,cb)=>{  
    cb(null,file.originalname);  
    }  
    }); 
    
    
var uploads = multer({storage:storage});  



router.get('/',(req,res)=>{
       // Parse the image using Jimp.read() method

    
    res.render('addimg');
});

router.post("/uploadimg", uploads.single("uploadfile"),async(req, res) => {
    // console.log(req.file.filename);
    // console.log(req.body.content);

    var buffer=fs.readFileSync('public/assets/uploads/'+req.file.filename);
    Jimp.read(buffer, function(err, image) {
        if (err) {
            console.error(err);
        }
        // Creating an instance of qrcode-reader module
        let qrcode = new qrCode();
        qrcode.callback = function(err, value) {
            if (err) {
                console.error(err);
            }
            const obj = JSON.parse(value.result);
            
            // Printing the decrypted value
            console.log(obj.name);

            let usr = new Users();
            usr.username="vik";
            usr.medname=obj.name;
            usr.expdate=obj.expdate;
            usr.save();
            

        };
        // Decoding the QR code
        qrcode.decode(image.bitmap);
    });
    await unlinkAsync(req.file.path);

    res.send('success');
});



router.get('/search',(req,res)=>{
    res.render('search');
});


router.post('/search',uploads.single("uploadfile"),(req, res)=>{
    var buffer=fs.readFileSync('public/assets/uploads/'+req.file.filename);
    Jimp.read(buffer, function(err, image) {
        if (err) {
            console.error(err);
        }
        // Creating an instance of qrcode-reader module
        let qrcode = new qrCode();
        qrcode.callback = async(err, value) =>{
            if (err) {
                console.error(err);
            }
            const obj = JSON.parse(value.result);
            
            // Printing the decrypted value
            console.log(obj.name);
            var users =await Users.find({username:"vik",medname:obj.name});
            console.log(users);
            res.render('result',{usr:users});
            await unlinkAsync(req.file.path);


        };
        // Decoding the QR code
        qrcode.decode(image.bitmap);
    });
    

   
});


router.get('/listall',async(req,res)=>{
    var users =await Users.find({username:"vik"});
    res.render('listall',{users});
});

module.exports = router;
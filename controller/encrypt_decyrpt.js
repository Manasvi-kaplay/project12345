var express=require("express");
var router=express.Router();
router.get('/encrypt',function(req,res){
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');
console.log("Encrypted string...",mystr);

})
module.exports=router;
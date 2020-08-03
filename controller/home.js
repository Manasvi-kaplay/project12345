var express=require("express");
var router=express.Router();
var category=require("../model/category")
var crypto=require("crypto");
router.get('/pg',function(req,res){
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abcd', 'utf8', 'hex')
mystr += mykey.final('hex');
console.log("Encrypted string...",mystr);
    var pagedata={"pagename":"home","title":"Home page"}
    res.render("layout",pagedata);
})
module.exports=router;
var express=require("express");
var router=express.Router();
router.get('/allStates',function(req,res){
    var pagedata={"pagename":"states","title":"All States"}
    res.render("layout",pagedata);
})
module.exports=router;
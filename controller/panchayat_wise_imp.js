var express=require("express");
var router=express.Router();
var queries=require("../model/category")
router.get('/get',function(req,res){
var state=req.session.state;
var block=req.session.block;
var query={$and:[{Block: block},{Total_Households:{$gt:0}}]}
queries.aggregate(state,[{ $match:query},
{ $group: { _id: "$Panchayat", total1: { $sum: "$Total_Households" }, total2: { $sum: "$Total_Registered" } } }],
function(err,result){
    if(err){
        console.log(err)
    }
    if(result){
        console.log("Required result.....*****",result)
        var pagedata={"title":"Highlight panchayat wise important reports","pagename":"panchayat_wise_imp",result:result}
        res.render("layout",pagedata)
    }
})
})
module.exports=router;
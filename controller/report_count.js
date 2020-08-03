var express=require("express")
var router=express.Router();
var queries=require("../model/category")
router.get('/reg_count',function(req,res){
    //console.log("Registration application register count!!!!!",req.query)
    var state=req.session.state;
    var reg_count=req.query.count;
    reg_count=Number(reg_count);
    console.log("reg_count....///",reg_count)
    queries.update("report_count",{State:state},{ Reg_application:1 },function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            console.log("updated result")
        }
    })
})
router.get('/pend_count',function(req,res){
    //console.log("Registration application register count!!!!!",req.query)
    var state=req.session.state;
    var reg_count=req.query.count;
    reg_count=Number(reg_count);
    console.log("reg_count....///",reg_count)
    queries.update("report_count",{State:state},{ Pend_jobcards:1 },function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            console.log("updated result")
        }
    })
})
router.get('/popularity',function(req,res){
    queries.find("report_count",function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            var pagedata={"title":"Popularity of reports","pagename":"report_count",result:result}
            res.render("layout",pagedata)
        }
    })
})
module.exports=router;
var express=require("express");
var router=express.Router();
var queries=require("../model/category")
router.get('/login',function(req,res){
    var state=req.query.id;
    console.log("state...",state)
    var collection_name="";
    var count=0;
    queries.list(function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            result.forEach(function(a){
                if(state==a.name){
                    collection_name=a.name
                    count+=1
                    console.log("collection_name...",collection_name)
                }
            })
            console.log(count,"collection_name....***********",collection_name)
            if(count==1){
                queries.distinct(collection_name,"District",function(err,result2){
                        if(err){
                            console.log(err)
                        }
                        if(result2){
                            console.log("result2......",result2)
                            var pagedata={"pagename":"login","title":"login page",state:state,result2:result2}
                            res.render("layout",pagedata);
                        }
                })
            }
            else{
                var pagedata={"pagename":"login2","title":"login page",state:state}
                            res.render("layout",pagedata);
            }
        }
    })
    

})
router.post('/block',function(req,res){
    console.log("req.body............",req.body)
    var year=req.body.year
    var state=req.body.state
    var district=req.body.district
    queries.distinctWhere(state,"Block",{District:district},function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            var block=result
            console.log("block....*******",block);
            var pagedata={"pagename":"block","title":"Choose block",year:year,state:state,district:district,block:block}
            res.render("layout",pagedata)
        }
    }) 
})
router.post('/panchayat',function(req,res){
    console.log("req.body....!!!!!!!!!",req.body)
    var year=req.body.year;
    var state=req.body.state;
    var district=req.body.district;
    var block=req.body.block;
    queries.distinctWhere(state,"Panchayat",{Block:block},function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            var panchayat=result;
            console.log("pancahayat........%%%%%%",panchayat)
            var pagedata={"pagename":"panchayat","title":"Choose panchayat",year:year,state:state,district:district,block:block,panchayat:panchayat}
            res.render("layout",pagedata)
        }
    })
})
module.exports=router;
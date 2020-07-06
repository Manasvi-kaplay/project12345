var express=require("express");
var router=express.Router();
var category=require("../model/category")
router.get('/login',function(req,res){
    var state=req.query.id;
    console.log("state...",state)
    category.findWhere({state:state},function(err,result){
        var data=result[0]
        if(err){
            console.log(err)
        }
        if(data==undefined){
            var pagedata={"pagename":"login2",
    "title":"login page",state:state}
    res.render("layout",pagedata);
        }
        else{
            console.log("data..........",data)
            console.log("result..........",result)
            var districts=data.districts
            console.log("districts..........",districts)
            var pagedata={"pagename":"login",
    "title":"login page",state:state,districts:districts}
    res.render("layout",pagedata);
        }
    })  
})
router.post('/block',function(req,res){
    console.log("req.body............",req.body)
    var year=req.body.year
    var state=req.body.state
    var district=req.body.district
    category.findWhere({state:state},function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            var data=result[0]
            console.log("LLLLLLLLLLLL",data)
            var dis=data.districts
            var block=[];
            for(var i=0;i<dis.length;i+=1){
                console.log(dis[i])
                console.log(Object.values(dis[i]))
                if(Object.keys(dis[i])==district){
                    console.log("Selected district....",Object.keys(dis[i]))
                    Object.values(dis[i]).forEach(function(b){
                        b.forEach(function(k){
                            console.log(Object.keys(k))
                            block=Object.keys(k)
                        })
                    })
                    break
                }
            }
            console.log("!!!!!!!!!!!!!!!!!!!",block)
            var pagedata={"pagename":"block","title":"Choose block",state:state,year:year,dis:dis,district:district,block:block}
            res.render("layout",pagedata);
        }
    })
})
router.post('/panchayat',function(req,res){
    console.log("req.body....!!!!!!!!!",req.body)
    var year=req.body.year;
    var state=req.body.state;
    var district=req.body.district;
    var block=req.body.block;
    category.findWhere({state:state},function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            var data=result[0]
            console.log("LLLLLLLLLLLL",data)
            var dis=data.districts
            var panch=[];
            for(var i=0;i<dis.length;i+=1){
                console.log(dis[i])
                console.log(Object.values(dis[i]))
                if(Object.keys(dis[i])==district){
                    console.log("Selected district....",Object.keys(dis[i]))
                    Object.values(dis[i]).forEach(function(b){
                        b.forEach(function(k){
                            console.log("Entries of k...",Object.entries(k))
                            Object.entries(k).forEach(function(p){
                                console.log("ppppppppp",p)
                                if(p[0]==block){
                                    console.log("Selected block...",p[0])
                                    console.log("panchayats of selected block",p[1])
                                    panch=p[1]
                                }
                            })
                        })
                    })
                    break
                }
            }
            console.log("!!!!!!!!!!!!!!!!!!!********",panch)
            var pagedata={"pagename":"panchayat","title":"Choose panchayat",state:state,year:year,district:district,block:block,panch:panch}
            res.render("layout",pagedata);
        }
    })
    
})
module.exports=router;
const router= require("express").Router();
router.get("/getusers",(req,res)=>{
    res.json({
        success:true,
        data:[{name:"Nitesh"},{name:"veer"}]
    })
})
router.get("/getoneuser",(req,res)=>{
    res.json({
        success:true,
        data:{name :"nitesh"}
    })
})
module.exports= router;

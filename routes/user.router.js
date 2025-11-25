const router= require("express").Router();
router.get("/getusers",(req,res)=>{
    res.json({
        success:true,
        data:[{name:"Nitesh"},{name:"veer"}]
    })
})

module.exports= router;
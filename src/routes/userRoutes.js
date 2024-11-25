const express =require("express")
const verifyToken=require("../middlewares/authMiddleware")
const authorizeRoles=require("../middlewares/roleMiddleware")
const router=express.Router();

// only admin has access
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message: "welcome admin"})
})

// both admin and manager can access
router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res)=>{
    res.json({message: "welcome manager"})
})

// all can access 
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{
    res.json({message: "welcome user"})
})


module.exports=router;
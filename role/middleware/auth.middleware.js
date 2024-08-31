const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model")


const auth = (req,res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({
            message:"Token not found pls login again"
        })
    }
    const token = req.headers.authorization.split("")[1];
    if(token){
       try {
        jwt.verify(token,process.env.JWT_SECRET_KEY, async(err,decoded)=>{
            if(err){
                res.status(401).json({
                    message:"Invalid token"
                })
            
            }
            if(decoded){
                const userId = decoded.id
                const user = await UserModel.findById(userId)
                if(!user){
                    return res.status(404).json({
                        message:"User not fund in auth"
                    })
                }
                req.user = user;
                next()
            }
        })
       } catch (error) {
        res.status(401).json({
            message:"Invalid token"
        })
       }
    }
}

module.exports = auth;
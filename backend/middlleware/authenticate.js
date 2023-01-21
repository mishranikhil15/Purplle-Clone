const jwt=require("jsonwebtoken")
const authenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    // const new_token=token.split(" ")[1]
    try {
        if(token){
            const decoded= jwt.verify(token, 'masai')
            // console.log(decoded);
            const userID=decoded.userID 
                 if(decoded){
                    req.body.userID=userID ////automatically adding userId so we dont have to send in body while creating notes
                     next();
                 }else{
                     res.send(" Please Login First1") 
                 }
              
         }else{
             res.send(" Please Login First")
         }
    } catch (error) {
        console.log(error.message);
        res.send({message:error.message})
    }
    
}

module.exports={
    authenticate
}

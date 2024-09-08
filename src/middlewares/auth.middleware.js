export const auth =(req,res,next)=>{

if(req.session.useremail){

next()

}

else{

    res.redirect("/login")
}

}
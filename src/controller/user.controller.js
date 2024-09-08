import UserModell from "../modell/user.modell.js"
import ProductModel  from "../modell/product.model.js";





export default class usercontroller{





getregister(req,res){

res.render('register')

}




getlogin(req,res){

res.render('login',{errorMessage:null})

}

 adduser(req,res){

 const {name,email,passward} =req.body;
 
 UserModell.add(name,email,passward);
 
  res.render('login',{errorMessage:null}) 


}


logincheck(req ,res){

const{email,passward}=req.body;

const  value=UserModell.isvalliduser(email,passward);


if(!value){
  return res.render('login',{errorMessage:invaliduser})
}


 req.session.useremail=email; 
 
let products=ProductModel.get();
return res.render('products',{products,useremail:req.session.useremail})



}

logout(req,res){
// on logout destroy the session

req.session.destroy ((err)=>{
  if(err)
{
  console.log("error")
}
else{
  res.redirect("/login")
}

})

}





}
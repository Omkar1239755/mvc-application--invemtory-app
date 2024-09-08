
import ProductModel from '../modell/product.model.js'


export default class Productcontroller{
// 1

getproduct(req,res){

 let products=ProductModel.get();
 console.log(products);
 res.render('products',{products,useremail:req.session.useremail})

}
// 2
getaddform(req,res){

  return res.render('new-product',{errormessage:null,useremail:req.session.useremail})

}

// 3
addnewproduct(req,res){

  ProductModel.addproduct(req.body);

let products=ProductModel.get();
res.render('products',{products,errormessage:null,useremail:req.session.useremail})

}

// 4

updateproductview(req,res){

  const id=req.params.id
  const productfound=ProductModel.getbyid(id);

  if(productfound){
    res.render('updatedview',{product:productfound, errormessage:null,useremail:req.session.useremail})
  }
  else{
    res.send('product not found')
  }


}


postupdateproduct(req,res){


  ProductModel.updateproduct(req.body);

  let products=ProductModel.get();
  res.render('products',{products,useremail:req.session.useremail})
  

}








}









// getupdateproductview(req,res){
// // ye pramas url se valu leta jaise yahape id url se lee

// const id=req.params.id; 

// const productfound=ProductModel.getbyid(id);

// if(productfound){
//   res.render("updatedproduct")

// }

// else{
//   res.send("product not found")
// }



// }

// postupdateproduct(req,res){


//   ProductModel.updateproduct(req.body);

//   let products=ProductModel.get();
//   res.render('new-product',products)
  

// }

// }




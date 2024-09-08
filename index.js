import express from 'express'
import  Productcontroller from './src/controller/product.controller.js'
import path from 'path'
import { uploadfile } from './src/middlewares/multer.js'
import usercontroller from './src/controller/user.controller.js'
import session from 'express-session'
import { auth } from './src/middlewares/auth.middleware.js'
import cookieparser from 'cookie-parser'
import { lastvisitcookie } from './src/middlewares/updatetime-createcookie.js'


// intialise the server

const server=express()



// parsing the data
server.use(express.urlencoded({extended:true}))

// using seesion middle ware

server.use(session({
secret:"omkar",
resave:false,
saveUninitialized:true,
cookie:false,

}))
// cookie parser
server.use( cookieparser())
server.use(lastvisitcookie)


// INTIALISE THE EJS
server.set('view engine', 'ejs')
server.set('views',path.join(path.resolve(),"src","view"))




// initilaise the classs
const abc =new  Productcontroller();  
const bcd=new usercontroller();




// 1} how to get a product in default request
server.get('/',auth, abc.getproduct)   




//2} get a new form to adda detail 
server.get('/new',auth,  abc.getaddform)

// 4} how to update view
server.get('/updatedview/:id', auth,  abc.updateproductview)

// 6}

server.get('/logout',bcd.logout )


// 7

server.get('/register',bcd.getregister)

server.get('/login',bcd.getlogin)

//3} returning the updated product to array and letter to be updated on view
server.post('/',auth, uploadfile.single() ,abc.addnewproduct)

// 5 how to rendered update view
 server.post('/updatedview',abc.postupdateproduct)

// 8

server.post('/register',bcd.adduser)


server.post('/login',bcd.logincheck)


// port calling
server.use(express.static('src/view'));

server.listen(3400)

console.log("server is listening")
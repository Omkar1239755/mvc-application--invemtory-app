import multer from "multer";

const storage= multer.diskStorage({

destination:(req,file,cb)=>{

    cb(null,'src/images')

},


filename:(req,file,cb)=>{ 
const name =Date.now()+'-'+file.originalname;
cb(null,name)

}

})


export const uploadfile=multer({
    storage:storage
})
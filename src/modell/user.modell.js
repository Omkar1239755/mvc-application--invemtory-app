

export default class UserModell{

constructor(id,name,email,passward){

this.id=id;
this.name=name;
this.email=email;
this.passward=passward;
}



static add(name,email,passward){

    const adduser= new UserModell(user.length+1,name,email,passward);

    user.push(adduser);

}

static isvalliduser(email,passward){

  

    const result= user.find((u)=>u.email==email && u.passward==passward)
    
    return result;



}

}


const user=[];
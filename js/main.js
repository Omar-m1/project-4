
// start validation section 
function validate(){
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var error =document.getElementById("error");

    
    error.style.color ="#fff";
    error.style.backgroundColor ="red";
    error.style.textAlign ="center";
    error.style.padding ="10px";
    error.style.marginBottom ="10px";  
    error.style.marginTop ="10px";  
    error.style.borderRadius ="10px";
    error.style.transition ="all 1s ease";


    if(name=="" &&email=="" &&pass=="" &&confirmpass==""){
        error.innerHTML= "Please Enter Your Data" ;
        return false;

    }else if(name.length<5 || name.length>15){
        error.innerHTML = "Please Ensert 5-15 Character";
        
        return false;
    }else if (! isNaN(name)){
        error.innerHTML = "Enter Text Not Number In Name";
        return false;
        
    }
    
    else if (email.indexOf("@")=="-1"){
        error.innerHTML ="Please Enter Vaild E-mail";
        return false ;

    }else if (pass.length<=8){
        error.innerHTML ="Please Enter Pass Atleast 8 Character";
        return false;

    }else if (confirmpass != pass){
        error.innerHTML ="Please Enter The Confirmpass";
        return false;
    }else{
        return true;
    }

}

// Initialization for ES Users
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });






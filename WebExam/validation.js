function validationForm()
{
    if(validatename()){
        alert("Enter username with 6-14 characters");
        document.myform.username.focus();
    }
    else if(document.getElementById("uname").value==""){
        alert("Enter your username");   
        document.myform.username.focus();
    }

    else if(document.getElementById("pass").value==""){
        alert("Enter your password");   
        document.myform.password.focus();
    }
    else if(validatePassword()){
        alert("Enter password with lowercase, uppercase, number and special character");
        document.myform.password.focus();
    }

    else if(validateEmail()){
        alert("write valid email id");
        document.myform.emailID.focus();
    }

    if(validatenumber()){
        alert("Enter valid 10 digit phone number");
        document.myform.phone.focus();
    }
    else if(document.getElementById("phn").value==""){
        alert("Enter your phone number");   
        document.myform.phone.focus();
    }

    else if(document.getElementById("ct").value==""){
        alert("Enter your city name");   
        document.myform.city.focus();
    }

    else{
        validateUser();
     } 
}

    
function validateUser(){
    var resname = ["Shweta", "Shubham", "Priyanka"];
        urname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<resname.length; i++)
        {
            if (!urname.localeCompare(resname[i])){
            alert("Username already exist, please choose different name");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            resname.push(urname);
            alert("Congratulations, Registration is successfully done");
            document.myform.submit();
        } 
   }


function validatePassword(){
            var str = document.getElementById("pass").value; 
            if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g)) 
                return false;
            else 
                return true; 
    
   }


function validatename(){
    var str = document.getElementById("uname").value; 
    if (str.length > 5 && str.length < 15) 
        return false;
    else 
        return true; 
}


function validatenumber(){  
    var str = document.getElementById("phn").value; 
    if (str.length ==10) 
        return false;
    else 
        return true; 
}


function validateEmail()  
    {
    var str = document.getElementById("email").value; 
            if (str.match(/@/g)  )
                return false;
            else 
                return true; 
} 


function showDetails(){
    var str1 = document.getElementById("uname").value; 
    document.write(str1);
}


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
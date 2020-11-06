function selectDevice()
{
    arrlap1 = 'Lenovo~Sony~Hp';
    laptemp = arrlap1.split('~').join(" <br> ");
    arrmob2 = 'iPhone~Samsung~Sony';
    mobtemp = arrmob2.split('~').join(" <br> ");
    arrtv3 = 'Redmi~Samsung~LG';
    tvtemp = arrtv3.split('~').join(" <br> ");

    var sel = document.getElementById("mydev"); 
    if(sel.value == 'Laptop')
    {
    document.getElementById("mycolordiv").innerHTML=laptemp;
    }
    else if(sel.value == 'Mobile')
    {
    document.getElementById("mycolordiv").innerHTML=mobtemp;
    }
    else if(sel.value == 'TV')
    {
    document.getElementById("mycolordiv").innerHTML=tvtemp;
    }
    else
    {
    document.getElementById("mycolordiv").innerHTML="";
    }
}
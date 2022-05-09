function compute()
{    
    
    //initialize variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //SI Calculation formula
    var interest = principal * years * rate /100;
    
    //Getting current year from data functon and adding numer of years as Integer
    var year = new Date().getFullYear()+parseInt(years);
    
    //Check condition for valid number in input field principal
    if(principal == undefined || principal <=0)
    {
        alert ("Enter a Positive Number");
        document.getElementById("prinicipal").focus();
                                
        return
    }
    
    else
    {
        //Display result in span result section with highlighting
        var Ftext = "For deposit amount of <mark>" + principal +",</mark><br>";
        var Stext = "at an interest rate of <mark>" + rate +" %.</mark><br>";
        var Ttext = "You will receive an amount of <mark>" + interest + ", </mark><br>";
        var Fotext = "in the year <mark>"+year +"</mark>";
   
        document.getElementById("result").innerHTML=Ftext+Stext+Ttext+Fotext       
    }
}
 
function UpdateRate(){
    var ratevalue = document.getElementById("rate").value
    document.getElementById("rate_val").innerText=ratevalue;
}

function ClearCalculator(){
    document.getElementById('principal').value = "";
}

function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result")
        result.innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}
 
function showVal(newVal){
    document.getElementById("rate_val").innerHTML=newVal;
}

function checkdata(){
    var princ = document.getElementById("principal");
    
    if (princ.value == ""){
        alert("Please enter a positive number");
        princ.focus();
        return false;
    }
    if (pinc.value < 0){
        alert("Please enter a positive number");
        princ.focus();
        return false;
    }
    return true
}

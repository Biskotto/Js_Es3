    var storage = window.localStorage;
    // localStorage.clear();
        $("table").append(localStorage.getItem("tabella"));  
    
    

$("#btn1").click(function(){
    calcolo("+");
})
$("#btn2").click(function(){
    calcolo("-");
})
$("#btn3").click(function(){
    calcolo("*");
})
$("#btn4").click(function(){
    calcolo("/");
}) 

function calcolo(segno) {
    var num1 = parseInt($("#num1").val());  
    var num2 = parseInt($("#num2").val());
    var ris;
    switch(segno){
        case "+":
            ris = num1 + num2;
        break;
        case "-":
            ris = num1 - num2;
        break;
        case "*":
            ris = num1 * num2;
        break;
        case "/":
            ris = num1 / num2;
        break;
    }
    var string = "<tr><td>"+num1+"</td><td style='text-align:center'>"+segno+"</td><td>"+num2+"</td><td>"+ris+"</td></tr>";
    
if($("#num1").val()){
    $("table").append(string);
    var tabella = localStorage.getItem("tabella");
    localStorage.clear();
    localStorage.setItem("tabella", tabella + string);
}
    $("#num1").val("");
    $("#num2").val("");
}
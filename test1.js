var total = 0;
var opr = "";
var num2 =0;
var num1 = 0;
var str ="";


function clearBtn(){
    console.log("clear");
    document.getElementById("view").value = "";
    num1 = 0;
    num2 = 0;
    opr = "";

}


function result(){
    if(opr == '+'){
        total = parseInt(num1)+parseInt(num2);
        console.log("total",total)
    }else if(opr == "-"){
        total = parseInt(num1)-parseInt(num2);
        console.log("total",total)
    }else if(opr == "/"){
        total = parseInt(num1)/parseInt(num2);
        console.log("total",total)
    }else if(opr == "*"){
        total = parseInt(num1)*parseInt(num2);
        console.log("total",total)
    }
    document.getElementById("view").value = num1+' '+opr+' '+num2+' = '+total;
    num1 = total ; 
    num2 = 0; 
    opr = "";
}

function numberAdd(num){

    console.log(num);

    if(opr == "" && num1 == 0){
        num1 = '' + num;
        console.log("num1",num1);
        str = ''+num1;
        document.getElementById("view").value = str;
    }else if(opr == "" && num1 !=0){
        num1 = ''+num1+num;
        console.log("num1",num1);
        str = ''+num1;
        document.getElementById("view").value = str;
    }else if(opr !="" && num2 == 0){
        num2 = ''+num;
        str = ''+num2;
        document.getElementById("view").value = str;
        console.log("num2",num2)
    }else if(opr !="" && num2 !=0){
        num2 = ''+num2+num;
        str = ''+num2;
        document.getElementById("view").value = str;
    } else if(opr != "" && num1 != 0){
        num2 = num;
    } else if(opr == "" && num1 != 0){
        num1 += ''+num;
    }

    console.log("final num1",num1);
    console.log("final num2",num2)
    
}

function operator(optest){
    console.log(optest)
    opr = optest;
    console.log(opr);
    str = ''+opr;
    document.getElementById("view").value = str;
}

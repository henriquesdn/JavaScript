function insert(num){
    var resultNumber = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = resultNumber + num;
};

function clean(){
    document.getElementById("result").innerHTML = "";
};

function back(){
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length - 1);
};

function calcular(){
    var result = document.getElementById("result").innerHTML;

    if(result){
        document.getElementById("result").innerHTML = eval(result);
    }
    else{
        document.getElementById("result").innerHTML = "Nada...";
    };
};
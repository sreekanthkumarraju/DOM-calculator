function add(){
  let first=document.getElementById("first").value;
  let second=document.getElementById("second").value;
  let result=parseInt(first)+parseInt(second);
  document.getElementsByClassName("output")[0].innerHTML=`Addition of First and Second value is ${result}`
}

function sub()
{
  let first=document.getElementById("first").value;
  let second=document.getElementById("second").value;
  let result=parseInt(first)-parseInt(second);
  document.getElementsByClassName("output")[0].innerHTML=`Subtraction of First and Second value is ${result}`
}

function mul(){
  let first=document.getElementById("first").value;
  let second=document.getElementById("second").value;
  let result=parseInt(first)*parseInt(second);
  document.getElementsByClassName("output")[0].innerHTML=`Multiplication of first and second value is ${result}`
}

function div(){
  let first=document.getElementById("first").value;
  let second=document.getElementById("second").value;
  let result=parseInt(first)/parseInt(second);
  document.getElementsByClassName("output")[0].innerHTML=`Division of first and second value is ${result}`
}
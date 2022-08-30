let outputscreen = document.getElementById("screen");

function display(num){
      outputscreen.value += num;
 }
function calculate(){
    try{
       outputscreen.value = eval(outputscreen.value);

    }
    catch(err)
    {
       alert("Invaild")
    }
 }
function cle(){
    outputscreen.value= " ";
}
function del(){
outputscreen.value = outputscreen.value.slice(0,-1);
 }
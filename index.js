const texBox=document.getElementById('texBox');
const cf =document.getElementById('cf');
const fc=document.getElementById('fc');
const result=document.getElementById('result');
const button=document.getElementById('button');

let temp;

function convert(){

if(cf.checked){
    
   temp=((texBox.value)*(9/5))+32;
    
    result.textContent=temp.toFixed(1)+" °F";

}
else if(fc.checked){

temp=(((texBox.value)-32)*5)/9;
    result.textContent=temp.toFixed(1)+" °C";

}else{
    result.textContent='Please Select type of conversion'
}

}
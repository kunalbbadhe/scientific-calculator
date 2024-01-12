let toggle=false;
function toggleTheme(){
   let calculator= document.querySelector('.calculator');
  toggle=!toggle;
   if(toggle){
   calculator.classList.add('dark-mode');
   }
   else{
    calculator.classList.remove('dark-mode');
   }
}

function append(str){
   const val= document.getElementById('input').value;
   
   document.getElementById('input').value=val+str;
}
function clearDisplay(){
    document.getElementById('input').value="";
}

function deleteChar(){
   const val=document.getElementById('input').value;
   input.value=input.value.slice(0,-1);
}

function calculateVal(){
   const val= document.getElementById('input').value;
   try{
      document.getElementById('input').value=eval(val);
   }catch(error){
      document.getElementById('input').value="";
   }
   
}


const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', function inc() 
 {

  curValue++;
  if(curValue>20)
    {
        curValue=0;
        alert("max 20 only allowed")
    }
    if(curValue%2==0){
        document.getElementById('odd').hidden=true;
        document.getElementById('even').hidden=false;
    }
    else{
        document.getElementById('even').hidden=true;
        document.getElementById('odd').hidden=false;
    }
   
  mainTitle.textContent = curValue;
});
btnDecrement.addEventListener('click',function dec() 
{
    curValue--;
  if(curValue<0)
{
    curValue=0;
    alert("-ve not allowed")
}
if(curValue%2==0){
    document.getElementById('odd').hidden=true;
    document.getElementById('even').hidden=false;
}
else{
    document.getElementById('even').hidden=true;
    document.getElementById('odd').hidden=false;
}

  mainTitle.textContent = curValue;
});

btnReset.addEventListener('click',  function reset() 
 {
  curValue = 0;
  mainTitle.textContent = curValue;
  document.getElementById('even').hidden=false;
  document.getElementById('odd').hidden=true;
});

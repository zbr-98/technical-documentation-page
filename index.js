var b1=document.querySelector('#button-1');
var b2=document.querySelector('#button-2');

function myfun1(){
      var element=document.getElementById('main-doc');
      element.classList.remove('.main-doc2');
      element.classList.add('.main-doc1');
}
function myfun2(){
      var element=document.getElementById('main-doc');
      element.classList.remove('.main-doc1');
      element.classList.add('.main-doc2');
}
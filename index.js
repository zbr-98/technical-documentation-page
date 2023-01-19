let b1=document.querySelector('#button-1');
let b2=document.querySelector('#button-2');
let b3=document.querySelector('#button-3');

let navEl=document.querySelector('#navbar');
let mainEl=document.querySelector('#main-doc');


b1.addEventListener('click',function onClick(event){
      console.log(event.target);

      const classes=['main-doc1','main-doc2','main-doc3'];
      const cls=['nav1','nav2','nav3'];

      navEl.classList.remove(...cls);
      navEl.classList.add('nav1');
      mainEl.classList.remove(...classes);
      mainEl.classList.add('main-doc1');
});
b2.addEventListener('click',function onClick(event){
      console.log(event.target);
      
      const classes=['main-doc1','main-doc2','main-doc3'];
      const cls=['nav1','nav2','nav3'];

      navEl.classList.remove(...cls);
      navEl.classList.add('nav2');
      mainEl.classList.remove(...classes);
      mainEl.classList.add('main-doc2');
});
b3.addEventListener('click',function onClick(event){
      console.log(event.target);
      
      const classes=['main-doc1','main-doc2','main-doc3'];
      const cls=['nav1','nav2','nav3'];

      navEl.classList.remove(...cls);
      navEl.classList.add('nav3');
      mainEl.classList.remove(...classes);
      mainEl.classList.add('main-doc3');
});

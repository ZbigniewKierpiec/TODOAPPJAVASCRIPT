let $form= document.querySelector('form');
let $input= document.querySelector('input');
let $ul=document.querySelector('ul');
let $span= document.querySelector('span');
let $value
$form.addEventListener('submit', function(e){

e.preventDefault()
 value= $input.value
 add(value)
console.log(value)

$form.reset()

})





const add=(value)=>{
if(value !=''){
let li=document.createElement('li');
li.textContent=value
let div= document.createElement('div');
div.classList.add('box');
let btnChek=document.createElement('button');
btnChek.classList.add('done')
btnChek.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
let btnDone= document.createElement('button');
btnDone.classList.add('delete')
btnDone.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>'
div.appendChild(btnChek)
div.appendChild(btnDone)
li.appendChild(div);
$ul.appendChild(li);
 let b=$ul.getElementsByTagName('li').length
 $span.textContent=b
}
}


const chek=(e)=>{
console.log(e.target)
if(e.target.closest('button').classList.contains('done')){
   e.target.closest('li').classList.toggle('active')
   e.target.closest('button').classList.toggle('active2')
}else if(e.target.closest('button').classList.contains('delete')){
    e.target.closest('li').classList.add('remove')
  
    addEventListener('transitionend', function(){
        e.target.closest('li').remove()
        let b=$ul.getElementsByTagName('li').length
        $span.textContent=b
    })
  
}



}


const d= ()=>{


let ul=document.getElementById('ul');
let b= ul.getElementsByTagName('li').length
$span.textContent=b

}
d()
$ul.addEventListener('click', chek)

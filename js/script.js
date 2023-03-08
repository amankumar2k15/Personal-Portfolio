// Declaring Variables 
let p_btns = document.getElementsByClassName('p-btns')[0];
let p_btn = document.querySelectorAll('.p-btn');
let p_box = document.querySelectorAll('.project-box');
let head_dev = document.getElementById('head-dev');
let head_edu = document.getElementById('head-edu');
let head_skills = document.getElementById('head-skills');
let about_text_1 =document.getElementsByClassName('about-text-1')[0];
let about_text_2 =document.getElementsByClassName('about-text-2')[0];
let about_text_3 =document.getElementsByClassName('about-text-3')[0];
let nav = document.getElementById('nav');
let box = document.getElementById('box');
let bar = document.getElementById('bar');
let cross = document.getElementById('cross');



// Events 
p_btns.addEventListener('click', (e) => {
    const p_box_clicked = e.target;
    const btn_num = p_box_clicked.dataset.btnNum;

    const p_box_active =  document.querySelectorAll(`.p-btn--${btn_num}`);

    p_box.forEach((curElem) => curElem.classList.add('p-box-not-active'));
    p_box_active.forEach((curElem) => curElem.classList.remove('p-box-not-active'));

})


head_dev.addEventListener('click', ()=>{
    about_text_1.style.display = "flex";  
    about_text_2.style.display = "none";  
    about_text_3.style.display = "none";  
})
head_edu.addEventListener('click', ()=>{
    about_text_1.style.display = "none";  
    about_text_2.style.display = "flex";  
    about_text_3.style.display = "none";  
    
})
head_skills.addEventListener('click', ()=>{
    about_text_1.style.display = "none";  
    about_text_2.style.display = "none";  
    about_text_3.style.display = "flex";    
})

box.addEventListener('click', ()=>{
 if(bar.style.display != "none"){
    bar.style.display = "none"
    cross.style.display = "flex"
    nav.style.left = "0%";
    
}else{
    bar.style.display = "flex"
    cross.style.display = "none"
    nav.style.left = "-100%";
 }
})
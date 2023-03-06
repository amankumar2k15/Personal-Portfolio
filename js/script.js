// Declaring Variables 
let p_btns = document.getElementsByClassName('p-btns')[0];
let p_btn = document.querySelectorAll('.p-btn');
let p_box = document.querySelectorAll('.project-box');


p_btns.addEventListener('click', (e) => {
    const p_box_clicked = e.target;
    const btn_num = p_box_clicked.dataset.btnNum;

    const p_box_active =  document.querySelectorAll(`.p-btn--${btn_num}`);

    p_box.forEach((curElem) => curElem.classList.add('p-box-not-active'));
    p_box_active.forEach((curElem) => curElem.classList.remove('p-box-not-active'));

})
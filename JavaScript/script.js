//Mobile navbar section 
burger = document.querySelector('#bar')
navbar = document.querySelector('.navbar')

burger.addEventListener('click' , ()=>{
    navbar.classList.add('h-left')
    navbar.classList.toggle('v-hidden')
});


// navbar info section 
info = document.querySelector('#info-btn')
contact = document.querySelector('.contactinfo')
cross = document.querySelector('#cross')

info.addEventListener('click' , ()=>{
    console.log('this function is run');
    contact.classList.add('h-left-info')
    contact.classList.toggle('v-hidden-info')
});
cross.addEventListener('click' , ()=>{
    contact.classList.toggle('v-hidden-info')
});


// Search section 
icon = document.querySelector('#search-btn')
box = document.querySelector('.search')

icon.addEventListener('click' , ()=>{
    box.classList.add('h-height')
    box.classList.toggle('v-hidden-info')
});
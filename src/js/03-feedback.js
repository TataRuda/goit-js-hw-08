import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");
form.addEventListener('input', throttle(onSaveData, 500));
form.addEventListener('submit', onSubmit);


const data = {};

function onSaveData (event) {
    data[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit (event) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');  
}


// This code can load saved data

function dataLocalStorage() {
    const loadData = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (loadData){
        email.value = loadData.email;
        message.value = loadData.message;
    }
} 

let message = {
    loading: "загрузка",
    success: "Спасибо, скоро мы с вами свяжемся",
    failure: "Что-то пошло не так"
};

console.log(message);

let form = document.querySelector(".main-form");
let formInput = form.querySelector('input');
let input = document.getElementsByTagName('input');
let contactForm = document.querySelector('#form');
let contactFormInput = contactForm.querySelectorAll('input');
let statusMessage = document.createElement('div');
console.log(statusMessage);
console.log(contactForm);
statusMessage.classList.add('status');

function writeMessage() {
    return new Promise((resolve, reject) => {
        resolve();
        reject();
    });
}

const func = writeMessage();

let funcSuccess = function () {
    statusMessage.textContent = message.success;
}

let funcFailure = function () {
    statusMessage.textContent = message.failure;
}

func.then(funcSuccess, funcFailure);




///////////////////////////Event listener навешиваем
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // создать объект для формы
    var formData = new FormData();

    function appendFormData(key, value) {
        formData.append(key, value);
    }
    appendFormData(formInput.name, formInput.value);


    ///переводим данные в формат json
    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj); ///js обьекты в json формат


    // отослать
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php");
    xhr.send(json);
    xhr.addEventListener('readystatechange', writeMessage);
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }

    form.appendChild(statusMessage);

});
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // создать объект для формы
    var formData = new FormData();

    function appendFormData(key, value) {
        formData.append(key, value);
    }

    for (let i = 0; i < contactFormInput.length; i++) {
        appendFormData(contactFormInput[i].name, contactFormInput[i].value);
    }

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj); ///js обьекты в json формат

    // отослать
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php");
    xhr.send(json);
    xhr.addEventListener('readystatechange', writeMessage);
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
    

    contactForm.appendChild(statusMessage);

});
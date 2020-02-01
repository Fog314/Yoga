window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        };
    };

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //Timer

    let deadline = '2020-05-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(deadline) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor(t / 1000 / 60 / 60 % 24);
        let days = Math.floor(t / 1000 / 60 / 60 / 24);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    function setClock(id, endtime) {
        let timer = document.querySelector('#id'),
            days = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 0.1);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (days.textContent < 10) {
                days.textContent = "0" + t.days + " :";
            } else days.textContent = t.days + " :";

            if (hours.textContent < 10) {
                hours.textContent = "0" + t.hours;
            } else hours.textContent = t.hours;

            if (minutes.textContent < 10) {
                minutes.textContent = "0" + t.minutes;
            } else minutes.textContent = t.minutes;

            if (seconds.textContent < 10) {
                seconds.textContent = "0" + t.seconds;
            } else seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };


    setClock('timer', deadline);

    ////модальное окно

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let descriptionBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }


    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    class Options {
        constructor(height, width, bg, color, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.backgroundColor = bg;
            this.color = color;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        divCreat(text = "defaultText") {
            let div = document.createElement('div');
            div.textContent = text;
            div.style.cssText = `height: ${this.height};
                                width: ${this.width};
                                background-color: ${this.backgroundColor};
                                color: ${this.color};
                                font-size: ${this.fontSize};
                                text-align: ${this.textAlign};`;
            document.body.appendChild(div);
        }
    }
    let styles = ['100px', '100%', 'black', 'white', '140%', 'center']
    let hello = "©Tim Iskhakov.2020";
    let newDiv = new Options(...styles);
    newDiv.divCreat(hello);




    ///////////////////////////Form
    let message = {
        loading: "загрузка",
        success: "Спасибо, скоро мы с вами свяжемся",
        failure: "Что-то пошло не так"
    };

    let form = document.querySelector(".main-form");
    let input = document.getElementsByTagName('input');
    let contactForm = document.querySelector('#form');
    let statusMessage = document.createElement('div');
    console.log(form);
    console.log(contactForm);
    statusMessage.classList.add('status');

    function sendData(event) {
            event.preventDefault();
            if (event.target == contactForm){
                contactForm.appendChild(statusMessage);
                console.log(event);
            } else if (event.target == form){
                form.appendChild(statusMessage);
                console.log(event);
            };



            let formData = new FormData(form);
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.send(formData); //отправляем либо json, либо formData(то, что отправил пользователь)

            
            // ///переводим данные в формат json
            // let obj = {};
            // formData.forEach(function (value, key) {
            //     obj[key] = value;
            // });
            // let json = JSON.stringify(obj); ///js обьекты в json формат

           

            function writeMessage() {
                return new Promise((resolve,reject)=>{
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

            func.then(funcSuccess,funcFailure);

            request.addEventListener('readystatechange', writeMessage);
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        };

    form.addEventListener('submit', sendData);
    contactForm.addEventListener('submit', sendData);
});
export default function calc(){

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.querySelector('#select'),
    totalValue = document.querySelector('#total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;


totalValue.innerHTML = 0;

persons.addEventListener('input', () => {
    personsSum = persons.value;
    total = (Number(daysSum) + Number(personsSum)) * 4000;
    console.log(total);
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

restDays.addEventListener('input', () => {
    daysSum = restDays.value;
    total = (Number(daysSum) + Number(personsSum)) * 4000;
    if (persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});


place.addEventListener('change', () => {
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }


});

localStorage.setItem("number", 1);


console.log(localStorage.getItem("number"));


localStorage.removeItem("number");
}
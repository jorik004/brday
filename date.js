let body = document.querySelector('body');

let date = new Date();
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let weaks = ['Воскресенье' ,'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

let d = `<p class='date'>Сейчас ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года (${weaks[date.getDay()]})</p>`

body.insertAdjacentHTML('beforebegin', d);

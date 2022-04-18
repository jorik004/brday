let birthdayToday = document.querySelector('.birthdayToday');
let birthdaySecond = document.querySelector('.birthdaySecond');




for(key in people){
  if(date.getDate() == people[key].day && months[date.getMonth()] == people[key].month){
    birthdayToday.insertAdjacentHTML('beforeend', `
    <div class='birthdayText'>
    
        <p>${key}
          <span style='color: cyan; font-size: 14px;'>
          ${people[key].day} ${people[key].month} (${date.getFullYear() - people[key].year} лет)
          </span>
        </p>
        
    </div>`);
  }
  
  /*else{
    birthdayToday.insertAdjacentHTML('beforeend', '<p>Сегодня никакого дня рождения не будет.</p>');
    break;
  }*/

}

for(key in people){
  if(((date.getDate() + 10) >= people[key].day && (date.getDate() + 1) <= people[key].day)
  && months[date.getMonth()] == people[key].month){
    birthdaySecond.insertAdjacentHTML('beforeend', `
    
    <div class='birthdaySecondText'>
      <p>${key}</p>
      <p>${people[key].day} ${people[key].month}</p>
    </div>
    `)
  }
}



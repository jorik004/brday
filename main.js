let birthdayToday = document.querySelector('.birthdayToday');


let people = {
  'Alan Aman': {
    'day': 17, 
    'month': 'Апреля', 
  }, 
  
  'Zharmukhambet Mangutov': {
    'day': 9, 
    'month': 'Сентября', 
  }, 
  'Kymbat Mangutova': {
    'day': 25,
    'month': 'Августа',
  },
  'test': {
    'day': 18,
    'month': 'Апреля', 
    'year': 2004,
  },
  'test two': {
    'day': 18, 
    'month': 'Апреля',
    'year': 1992, 
  },
};


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



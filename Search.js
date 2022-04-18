const search = document.querySelector('.search').children

let peopleNum = 0
for(let key in people){
  if(key){
    peopleNum++
  }
}

function toNormalCase(str){
  if (!str) return str;
   return str.split(' ')
  .map(
      (word) => word[0].toUpperCase() + word.slice(1)
  )
  .join(' ')
}


function searchPeople(){
  let name = search[0].value
  name = name.toLowerCase()
  
  for(let p in people){
    p = p.toLowerCase()
    let i = 0;
    if(p.includes(name)){
      p = toNormalCase(p)
      search[1].insertAdjacentHTML('afterend', `<p>${p} <span style='color: cyan; font-size: 14px;'>${people[p].day} ${people[p].month}</span></p>`)
      break
    }
    
    /*else{
      let inct = 0
      if(inct < peopleNum)
      {
        inct++
      }
      else{
        search[1].insertAdjacentHTML('afterend', `<p style='color: #FF6B49'>Совпадений не найдено</p>`)
      }
    }*/
  }
}


search[1].addEventListener('click', searchPeople)

let monster = ``;

function selectAllMonsters() {
  let monsterName = document.getElementsByTagName('p').length;
  
  for (let i = 0; i < monsterName; i++){
    // let monsterName = document.getElementsByTagName('p')[i];
    let monsterContent = document.querySelectorAll('.monster-content')[i];
    monsterContent.addEventListener('click', getMonster)
    // console.log(monsterName)
    
  }


  
 
}
selectAllMonsters()

function getMonster(e) {
  let testEvent = e.target;
  let testEventValue = testEvent.innerHTML;
  let monster = `${testEventValue}`;
  // console.log(testEvent, monster)
  localStorage.setItem('monsterName', `${monster}`)
}










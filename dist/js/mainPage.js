let monster = ``;

function selectAllMonsters() {
  let monsterName = document.getElementsByTagName('p').length;
  
  for (let i = 0; i < monsterName; i++){
    let monsterContent = document.querySelectorAll('.monster-content')[i];
    monsterContent.addEventListener('click', getMonster)
    
  }


  
 
}
selectAllMonsters()

function getMonster(e) {
  let monsterEvent = e.currentTarget;
  let monsterEventValue = monsterEvent.children[1].children[0].children[0].innerHTML;
  let monster = `${monsterEventValue}`;
  localStorage.setItem('monsterName', `${monster}`)
}










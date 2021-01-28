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

function getMonster() {
  console.log('test');
}



// localStorage.setItem('monsterName', `${monsterName.innerHTML}`)




let monsterContent = document.querySelectorAll('.monster-content')[1];

let monster = ``;
monsterContent.addEventListener('click', getMonster)

function getMonster() {
  let monsterName = monsterContent.getElementsByTagName('p')[0];
  console.log(monsterName.innerHTML)
  localStorage.setItem('monsterName', `${monsterName.innerHTML}`)
}

// console.log(monsterContent)




// sessionStorage.setItem('monsterName', `${monster}`)
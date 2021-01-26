const apiUrl = "https://mhw-db.com/monsters";
let monster = `Anjanath`;
let testMonsterName = [];

// Selectors 
const monsterImage = document.querySelectorAll('.monster-image-lp')[0];
const monsterName = document.querySelectorAll('.monster-name')[0];
const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];
let monsterWeaknessDiv = document.querySelectorAll('.monster-weakness-container')[0];


async function getMonster() {
  const url = new URL('https://mhw-db.com/monsters');
  url.searchParams.set('p', JSON.stringify({
    id: true,
    name: true,
    weaknesses: true,
}));

  const res = await fetch(url)
    const data = await res.json()
    
  
  
  const monsterData = data.find((item) => {
    return item.name === `${monster}`;
  })

  updateMonsterData(monsterData);
}



function updateMonsterData(monsterData) {
  monsterImage.innerHTML = `<a href="#"><img src="./images/MHW_${monster}_Icon.png" alt="" class="monster-image monster-lp-image"></a>`;
  monsterName.innerHTML = `${monsterData.name}`;
  
  // For loop for each weakness 
  for (let i = 0; i < monsterData.weaknesses.length; i++) {
    let divEl = document.createElement('div');
    let monsterWeaknessTextNode = document.createTextNode(`${monsterData.weaknesses[i].element} ${monsterData.weaknesses[i].stars}`);
    // divEl.appendChild(monsterWeaknessTextNode);
    monsterWeaknessDiv.appendChild(divEl);

    let div = monsterWeaknessDiv.getElementsByTagName('div')[i];
    console.log(div);
    
    


    // divElement.classList.add('monster-weakness-content');
    

    // monsterData.weaknesses[i].stars
    // let iNode = document.createElement('i');
    // let monsterWeaknessINode = document.createTextNode(`${monsterData.weaknesses[i].stars}`);
    // iNode.appendChild(monsterWeaknessINode);
    // monsterWeaknessUl.appendChild(iNode);

    // console.log(liElement)
    // console.log(monsterData.weaknesses[i] , monsterData.weaknesses[i].stars )
  }
  

  
  // console.log(monsterData)
  // console.log(monsterData.name)
  // console.log(monsterData.weaknesses[0].element)
  // console.log(monsterData.weaknesses[0].stars)
}

getMonster();


 

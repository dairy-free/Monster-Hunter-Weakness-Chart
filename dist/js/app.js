const apiUrl = "https://mhw-db.com/monsters";
const monster = `Anjanath`;
let testMonsterName = [];

// Selectors 
const monsterImage = document.querySelectorAll('.monster-image-lp')[0];
const monsterName = document.querySelectorAll('.monster-name')[0];
const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];


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
  monsterImage.innerHTML = ``;
  monsterName.innerHTML = `${monsterData.name}`;
  monsterWeakness.innerHTML = `<p>${monsterData.weaknesses.element}${monsterData.weaknesses.stars}</p>`;
  // For loop for each element 
  for (let i = 0; i < monsterData.weaknesses.length; i++) {
    //working for element objects
    console.log(monsterData.weaknesses[i].element)
    console.log(monsterData.weaknesses[i].stars)
    
  }
  

  
  // console.log(monsterData)
  // console.log(monsterData.name)
  // console.log(monsterData.weaknesses[0].element)
  // console.log(monsterData.weaknesses[0].stars)
}

getMonster();


 

const apiUrl = "https://mhw-db.com/monsters";
const monster = `Anjanath`;
let testMonsterName = [];

// Selectors 
const monsterImage = document.querySelectorAll('.monster-image-lp')[0];
const monsterName = document.querySelectorAll('.monster-name')[0];
const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];


async function getMonster(testName, weakness) {
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

  monsterImage.innerHTML = ``;
  monsterName.innerHTML = `${monsterData.name}`;
  monsterWeakness.innerHTML = `<p>${monsterData.weaknesses[0].element}</p>`;


  console.log(monsterData)
  console.log(monsterData.name)
  console.log(monsterData.weaknesses[0].element)
  console.log(monsterData.weaknesses[1].stars)
  
  // testMonsterName.push(monsterName.name)
  
}



function updateMonsterData(testName, weakness) {
  // monsterTitle.innerHTML = `${monsterName.name}`;
}
// console.log(apiUrl);
getMonster();
// console.log(testMonsterName)

 

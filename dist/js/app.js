const apiUrl = "https://mhw-db.com/monsters";
const monster = `Anjanath`;

// Selectors 
const monsterIcon = document.querySelectorAll('.monster-image-lp')[0];
const monsterTitle = document.querySelectorAll('.monster-name')[0];
const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];

async function getMonster() {
  const url = new URL('https://mhw-db.com/monsters');
  url.searchParams.set('p', JSON.stringify({
    id: true,
    name: true,
    // type: true,
    weaknesses: true,
}));

  const res = await fetch(url)
    const data = await res.json()
    console.log(data);
  
  
  const monsterName = data.find((item) => {
    return item.name === `${monster}`;
  })

  console.log(monsterName)
  console.log(monsterName.name)
  console.log(monsterName.weaknesses)
  
}

function updateMonsterData() {
  
}
console.log(apiUrl);
getMonster();

 

const apiUrl = "https://mhw-db.com/monsters";

async function getMonster() {
  const url = new URL('https://mhw-db.com/monsters');
  url.searchParams.set('p', JSON.stringify({
    id: true,
    name: true,
    type: true,
    weaknesses: true,
}));

  const res = await fetch(url)
    const data = await res.json()
    console.log(data);

  
}

  getMonster();

  // Selectors 
  const monsterIcon = document.querySelectorAll('.monster-image-lp')[0];
  const monsterTitle = document.querySelectorAll('.monster-name')[0];
  const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];

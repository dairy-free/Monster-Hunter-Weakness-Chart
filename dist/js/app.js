const apiUrl = "https://mhw-db.com/monsters";

async function getMonster(monster) {
  const res = await fetch(`${apiUrl}/22`);
  const data = await res.json();
  console.log(data);
}

  getMonster();

  // Selectors 
  // insert selector for image here
  const monsterTitle = document.querySelectorAll('.monster-name')[0];
  const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];
  console.log(monsterWeakness);
  console.log(monsterTitle);
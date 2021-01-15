const apiUrl = "https://mhw-db.com/monsters";

async function getMonster(monster) {
  const res = await fetch(`${apiUrl}/22`);
  const data = await res.json();
  console.log(data);
}

  getMonster();
fetch('https://mhw-db.com/monsters')
  .then(res => res.json())
  .then(data => console.log(data))
  
fetch('https://mhw-db.com/monsters/24')
  .then(res => res.json())
  .then(data => console.log(data))

  let obj = {};
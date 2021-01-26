const apiUrl = "https://mhw-db.com/monsters";
let monster = `Odogaron`;
let testMonsterName = [];
const starEl = '<i class="fas fa-star"></i>';

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
    divEl.classList.add('monster-weakness-content');
    divEl.innerHTML = `
          <ul class="monster-weakness-ul">
            <li class="monster-weakness-li">${monsterData.weaknesses[i].element}</li>
            <li class="monster-weakness-li stars"></li>
          </ul>
        </div>
    `;
    
    monsterWeaknessDiv.appendChild(divEl);
    let stars = monsterWeaknessDiv.querySelectorAll('.stars')[i];

    if (monsterData.weaknesses[i].stars === 1) {
      stars.innerHTML = `${starEl}`;
    }
    if (monsterData.weaknesses[i].stars === 2) {
      stars.innerHTML = `${starEl}${starEl}`;
    }
    
    if (monsterData.weaknesses[i].stars === 3) {
      stars.innerHTML = `${starEl}${starEl}${starEl}`;
    }
    if (monsterData.weaknesses[i].stars === 4) {
      stars.innerHTML = `${starEl} ${starEl}${starEl}${starEl}`;
    }
    
    if (monsterData.weaknesses[i].stars === 5) {
      stars.innerHTML = `${starEl}${starEl}${starEl}${starEl}${starEl}`;
    }
  }
}

getMonster();


 

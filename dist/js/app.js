const apiUrl = "https://mhw-db.com/monsters";
const starEl = '<i class="fas fa-star"></i>';

// Selectors 
const monsterImage = document.querySelectorAll('.monster-image-lp')[0];
const monsterName = document.querySelectorAll('.monster-name')[0];
const monsterWeakness = document.querySelectorAll('.monster-weakness')[0];
let monsterWeaknessDiv = document.querySelectorAll('.monster-weakness-container')[0];


let monsterSessionName = localStorage.getItem('monsterName')
let monster = `${monsterSessionName}`;


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
  monsterImage.innerHTML = `<a href="#"><img src="./images/MHW_${monster}_Icon.png" alt="" class="monster-image monster-image-lp"></a>`;
  monsterName.innerHTML = `${monsterData.name}`;
  
  //  loop for each weakness a monster has
  for (let i = 0; i < monsterData.weaknesses.length; i++) {
    let divEl = document.createElement('div');
    divEl.classList.add('monster-weakness-content');

    if (monsterData.weaknesses[i].element === 'water') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/waterblight.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }

    if (monsterData.weaknesses[i].element === 'fire') {
     divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/fireblight.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }

    if (monsterData.weaknesses[i].element === 'thunder') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/thunderblight.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'ice') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/iceblight.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'dragon') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/dragonblight.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'poison') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/poison.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'sleep') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/sleep.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'paralysis') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/paralysis.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'blast') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/blastblight.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }
    if (monsterData.weaknesses[i].element === 'stun') {
      divEl.innerHTML =
      `
      <ul class="monster-weakness-ul">
        <li class="monster-weakness-li"><img src="/images/blight-images/stun.png" alt="" class="blight-images">${monsterData.weaknesses[i].element}</li>
        <li class="monster-weakness-li stars"></li>
      </ul>
    </div>
    `;
    }

    // Amount of weakness stars given for each monster
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
  }
}

getMonster();


 

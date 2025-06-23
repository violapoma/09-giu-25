/**
 * 1. OK recupero pulsante e campo input -> onclick
 * 2. OK fun onclick
 * 3. OK fun fetch
 * 4. OK fun per ciclo risultati fetch
 * 5. OK fun per html dei singoli elementi ciclati
 */

console.log('linking script.js');

const searchResultsDiv = document.getElementById('searchResults'); 

function fetchImg(keyword) {
  fetch(`https://api.pexels.com/v1/search?query=${keyword}`, {
    headers: {
      Authorization: "tpD4eM4thisxTD1SmStOomgB606Nm2CtgPMGIXgTDlMeoYaNi5Qs2EPQ"
    }
  })
  .then (resp => resp.json())
  .then (data => {
    console.log(data);
    renderImg(data.photos);
  })
}

//fetchImg('witchcraft');

const searchBtn = document.getElementById('searchBtn');
let queryIF = document.querySelector('input'); 

searchBtn.addEventListener('click', filterImg);

function filterImg() {
  //console.log('queryIF', queryIF.value);
  let parolaCercata = queryIF.value; 
  if (!parolaCercata) //controllo che ci sia una parola
    return; 

  fetchImg(parolaCercata);
 
}

function renderImg(photos) {
  searchResultsDiv.innerHTML = ''; 
  const photosEl = photos.map(photo => createCardImg(photo)); //array con card html
  console.log(photosEl);
  photosEl.forEach(e => { 
    searchResultsDiv.appendChild(e); //metto le card nel dom
  });
}

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
</div> */ 
function createCardImg(photo) { //creo div contenitore -> col
  const col = document.createElement('div');
  col.className = 'col-3';

  const card = document.createElement('div');
  card.className = 'card cardImg'; 
  card.style.backgroundImage = `url(${photo.src.medium})`;

  col.appendChild(card);

  return col;
}

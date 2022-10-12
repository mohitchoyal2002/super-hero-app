const con = document.getElementById('image')
const searchHeroBtn = document.getElementById('searchHero')
const newHero = document.getElementById('get-hero')
const getSuperHero = () => {
  const id = Math.floor(Math.random() * 400) + 1
  let api = fetch(`https://superheroapi.com/api.php/933534078035572/${id}`)
  api.then(response => response.json()).then(json => {
    console.log(json)
    con.innerHTML = `<h2>${json.name}</h2>`
    con.innerHTML += `<img src = ${json.image.url}></img>`
    con.innerHTML += `<h3>Power: ${json.powerstats.power}</h3>`
    con.innerHTML += `<h3>Strength: ${json.powerstats.strength}</h3>`
    con.innerHTML += `<h3>Speed: ${json.powerstats.speed}</h3>`
  })
}

getSuperHero()

const searchHeroWithName = () => {
  const name = document.getElementById('heroName').value
  // console.log(name.value)
  const api = fetch(`https://superheroapi.com/api.php/933534078035572/search/${name}`)
    .then(response => response.json())
    .then(json => {
      if (json.response == 'error') {
        con.innerHTML = `${json.error}`
      }
      else {
        console.log(json)
        // console.log(json.results[0].image.url)
        con.innerHTML = `<h2>${json.results[0].name}</h2>`
        con.innerHTML += `<img src = ${json.results[0].image.url}>`
        con.innerHTML += `<h3>Power: ${json.results[0].powerstats.power}</h3>`
        con.innerHTML += `<h3>Strength: ${json.results[0].powerstats.strength}</h3>`
        con.innerHTML += `<h3>Speed: ${json.results[0].powerstats.speed}</h3>`
      }
    })
}

searchHeroBtn.onclick = searchHeroWithName

newHero.onclick = getSuperHero
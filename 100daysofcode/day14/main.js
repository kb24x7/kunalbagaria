// const fetch = require("node-fetch");
let imgageInsert = document.getElementById('image')
let titleInsert = document.getElementById('title')
let newsInsert = document.getElementById('news')
let altInsert = document.getElementById('alt')
let dateInsert = document.getElementById('date')

async function getData() {
  const response = await fetch('https://xkcd.com/info.0.json')
  const xkcd = await response.json()
  dateInsert.innerHTML = xkcd.month + '/' + xkcd.day + '/' + xkcd.year
  titleInsert.innerHTML = xkcd.title
  altInsert.innerHTML = xkcd.alt
  if (xkcd.news) {
    newsInsert.innerHTML = xkcd.news
    newsInsert.style.display = ''
  }
  // @ts-ignore
  imgageInsert.src = xkcd.image
}
getData()
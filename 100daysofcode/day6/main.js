// const fetch = require("node-fetch");
// const config = require('./config.js')
// const api_key = config.NASA_API_Key
const api_key = 'ITUWO2UfgTsiaCKmJ45qQbyJEmPIKDsQNy7tXtiV'
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
let date = yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();
console.log(date)
const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${api_key}`
console.log(url)
const fetchNASAData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
async function getData() {
  let data 
let x = []
  data = await fetchNASAData()
  for (let i of data.photos) {
      x.push(i.img_src)
  }
  let randNum = (Math.floor(Math.random() * x.length - 1))
  console.log(randNum)
  console.log(x[randNum])
  let imgInsert = document.getElementById('image')
  imgInsert.src = x[randNum]
}
getData()
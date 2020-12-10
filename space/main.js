let aud = document.getElementById('bg-audio')
let title = document.getElementById('title')
let summary = document.getElementById('summary')
let imageUrl = document.getElementById('imageUrl')
let newsLink = document.getElementById('newsLink')
let disPause = document.getElementById('pause')
let disPlay = document.getElementById('play')

function play() {
    // @ts-ignore
    aud.play()
}

function pause() {
    // @ts-ignore
    aud.pause()
}
const fetchSpaceNews = async () => {
    try {
        // @ts-ignore
        const response = await fetch('https://spaceflightnewsapi.net/api/v2/articles')
        const dataNews = await response.json()
        return dataNews
    } catch (error) {
        console.log(error)
    }
}

let dataNews
let newsNumber = 0;
loadPage()

function next() {
    let totalLength = dataNews.length - 1
    if (newsNumber < totalLength) {
    newsNumber++
    addNews()
    }
}
function prev() {
    if (newsNumber != 0) {
        newsNumber--
    }
    addNews()
}

async function loadPage() {
    dataNews = await fetchSpaceNews()
    console.log(newsNumber)
    addNews()
}

function addNews() {
    console.log(dataNews[newsNumber])
    // @ts-ignore
    newsLink.href = dataNews[newsNumber].url
    title.innerHTML = dataNews[newsNumber].title
    summary.innerHTML = dataNews[newsNumber].summary.slice(-0, 350) + '...'
    // @ts-ignore
    imageUrl.src = dataNews[newsNumber].imageUrl
}
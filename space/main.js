let aud = document.getElementById('bg-audio')

function play() {
    // @ts-ignore
    aud.play()
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
async function loadPage() {
    let dataNews
    dataNews = await fetchSpaceNews()
    let latestNews = dataNews[0]
    let secondLatest = dataNews[1]
    let thirdLatest = dataNews[2]
    let fourthLatest = dataNews[3]
    let fifthLatest = dataNews[4]
    console.log(latestNews)
}
loadPage()
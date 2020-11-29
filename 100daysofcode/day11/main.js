let userInput = document.getElementById('name')
async function getMovieDetails() {
    // @ts-ignore
    let jsonMovieDetails = await fetch(`https://www.omdbapi.com/?apikey=2e966bca&t=${userInput.value}`)
    let details = jsonMovieDetails.json()
    return details
}
async function getmov() {
    disableAll()
    document.getElementById('status').innerHTML = 'Fetching...'
    let movie = await getMovieDetails()
    if (movie.Error) {
        document.getElementById('status').innerHTML = 'Movie not found!'
    } else {
        document.getElementById('status').style.display = 'none'
        if (movie.Poster) {
            // @ts-ignore
            document.getElementById('poster').src = movie.Poster
            document.getElementById('maindiv').style.marginLeft = '25px';
        }
        document.getElementById('title').innerHTML = `<b>Title:</b> ${movie.Title}`
        document.getElementById('rated').innerHTML = `<b>Rated:</b> ${movie.Rated}`
        document.getElementById('released').innerHTML = `<b>Released:</b> ${movie.Released}`
        document.getElementById('genre').innerHTML = `<b>Genre:</b> ${movie.Genre}`
        document.getElementById('director').innerHTML = `<b>Director:</b> ${movie.Director}`
        document.getElementById('actors').innerHTML = `<b>Actors:</b> ${movie.Actors}`
        document.getElementById('language').innerHTML = `<b>Language:</b> ${movie.Language}`
        document.getElementById('plot').innerHTML = `<b>Plot:</b> ${movie.Plot}`
        if (movie.imdbRating) {
            let spanText = '<span class="fa fa-star"></span>'
            let movieRating = Number(movie.imdbRating)
            let rating = Math.round(movieRating)
            let finalText = spanText.repeat(rating)
            document.getElementById('imdb').innerHTML = `<b>IMDb:</b> ${finalText} / ${movie.imdbRating}`
        }
    }
}
function disableAll() {
    document.getElementById('status').innerHTML = 'Fetching...'
    // @ts-ignore
    document.getElementById('poster').src = ''
    document.getElementById('title').innerHTML = ''
    document.getElementById('rated').innerHTML = ''
    document.getElementById('released').innerHTML = ''
    document.getElementById('genre').innerHTML = ''
    document.getElementById('director').innerHTML = ''
    document.getElementById('actors').innerHTML = ''
    document.getElementById('language').innerHTML = ''
    document.getElementById('plot').innerHTML = ''
}
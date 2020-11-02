import React, {useState} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL

function MovieSearch() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()
    
    const url = `${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    
    try {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        console.log(movies)
    } catch(err) {
      console.error(err)
    }
  }
  
  return (
  <>
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">Movie Name</label>
      <input className="input" 
            type="text" 
            name="query" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="i.e. Jurassic Park" 
      />
      <button className="button" type="submit">Search</button>
    </form>

    <div className="card-list">
      {movies && movies.filter(movie => movie.poster_path).map(movie => (
        <div key={movie.id} className="card">
          <img className="card--image" 
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                alt={movie.title + ' poster'} />
          <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card--desc">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default MovieSearch

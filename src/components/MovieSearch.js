import React, {useState} from 'react'
import MovieCard from './MovieCard'

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
        
    } 
    catch(err) {
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
          <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  </>
  )
}

export default MovieSearch

import React from 'react'

function MovieSearch() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">Movie Name</label>
      <input className="input" 
            type="text" 
            name="query" 
            placeholder="i.e. Jurassic Park" 
      />
      <button className="button" type="submit">Search</button>
    </form>
  )
}

export default MovieSearch

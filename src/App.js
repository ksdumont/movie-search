import './App.css';
import MovieSearch from './components/MovieSearch'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  console.log(API_KEY)
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <MovieSearch />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SearchMovies from './components/SearchMovies';
import ListOfMovies from './components/ListOfMovies';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/searchMovies" component={SearchMovies}/>
        <Route path="/listOfMovies" component={ListOfMovies}/>
      </Switch>
    </div>

    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <text> Movies is a wondeful website to search and find movies. Add them to your list to remeber to watch later! </text>
  </div>
)

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Watch from './Watch'
import Home from './Home'
import SearchResults from './SearchResults'

function App() {
  return (
    <div className="app">
       <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/watch" element={<Watch/>} />
          <Route path="/search" element={<SearchResults/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';
import Favorites from '../Favorites/Favorites.jsx';


import SearchBar from "../SearchBar/SearchBar";


function App() {
  return (
    <>
    <div>
      <h1>Giphy Search!</h1>
      {/* <SearchBar /> */}
    </div>

  <Router>
  
    <Route exact path='/'>
      <SearchBar />
    </Route>

    <Route exact path='/favorites'>
      <Favorites />
    </Route>

    
  </Router>
  </>
  );
}


export default App;

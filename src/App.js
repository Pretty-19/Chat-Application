import './App.css';
import Searchbar from './navbar';
import Sidebar from './navbar/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Searchbar></Searchbar>
      <Router>
      <div className="App">
      <Sidebar />
      </div>
    </Router>
    </div>

    
  );
}

export default App;

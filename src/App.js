import './App.scss';

import Header from "./components/header/Header";
import Newsfeed from './components/newsfeed/Newsfeed';
import Stats from './components/stats/Stats';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-body">
        <Newsfeed />
        <Stats />
      </div>
    </div>
  );
}

export default App;

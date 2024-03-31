import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RecomendedShows from './Components/RecomendedShows/RecomendedShows';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RecomendedShows/>
    </div>
  );
}

export default App;

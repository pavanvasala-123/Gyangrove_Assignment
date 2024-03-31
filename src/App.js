import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RecomendedShows from './Components/RecomendedShows/RecomendedShows';
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RecomendedShows/>
      <UpcomingEvents/>
    </div>
  );
}

export default App;

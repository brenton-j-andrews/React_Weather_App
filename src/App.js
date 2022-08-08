// Import components.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import Forecast from "./components/Forecast";

import './css/App.css';


const App = () => {
  return (
    <div className='App-wrapper'>
      <div className="Upper-wrappper">
        <BasicWeather />
        <DetailedWeather />
      </div>
      <Forecast />
    </div>
  )
}

export default App;

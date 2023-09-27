
import './App.css';
import Card from './components/Card';
import CardPropTypes from './components/CardPropTypes';
import {seriesList} from "./data/series-static.js"

function App() {
  return (
    <div id="grid-series">
      {/* <Card img={"similar-timeless.jpg"} year={2018}/> */}
      {
        seriesList.map(e=>
            <Card key={e.id} {...e}/>
          )
      }
   
    </div>
  );
}

export default App;

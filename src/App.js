import './App.css';
import MainPage from './components/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import ReservationView from './components/ReservationView';
import background from './assets/architecture-background.jpg';
import './SelectionableBookTable.css';

function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${background})`, backgroundSize: 'cover', height: '1100px'}}>
        <div >
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/reservation/:hour" component={ReservationView} />
          </Switch>
        </div>


      </div>
    </Router>
  );
}

export default App;
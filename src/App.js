import './App.css';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import ReservationView from './pages/ReservationView';
import background from './assets/architecture-background.jpg';
import './SelectionableBookTable.css';

function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh', minWidth:'100%', padding:0}}>
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
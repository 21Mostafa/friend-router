 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
  
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import FriendDetail from './Component/FriendDetail/FriendDetail';

function App() {
   

   

   
  return (
    
   
    <Router>
      <Switch>
        <Route path="/home">
             <Home />
        </Route>

        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route  path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    

  );
}

export default App;

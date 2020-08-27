import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Rooms_page from './pages/Rooms_Page/Rooms_page';
import SingleRoom_page from './pages/SingleRoom_page/SingleRoom_page';
import Error from './pages/Error/Error';
import {Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rooms/' component={Rooms_page}/>
        <Route exact path='/rooms/:slug' component={SingleRoom_page}/>
        <Route component={Error}/>
      </Switch>
    </div>
  )
}

export default App;

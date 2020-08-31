import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';
import Tulisan from './component/Home/Listartikel';
import Navbar from './component/Navbar1/Navbar1';
// import Artikelku from './component/Tulisanku/Tulisanku';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div>
        <Navbar />
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/Tulisan" component={Tulisan}/>
          <Route component={Error}/>
         </Switch>
      </div> 
    </BrowserRouter>
    );
  }
}
export default App;

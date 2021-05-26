import React,{ Component } from "react";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./components/TourList/TourList.scss";
import TourList from "./components/TourList/Ind";

class App extends Component{
  render(){
    return(
      <main>
      <Navbar/>
      <TourList/>
    </main>
    ); 
    
  }
}


export default App
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componenets/Home/Home'
import Section from './componenets/Section/Section'
import Header from './componenets/Header/Header';




class App extends Component{

   
  render(){
    return(
      <div className="App">
      <Header />
      <Home/>
     
    </div>
    )
  }
}

export default App;

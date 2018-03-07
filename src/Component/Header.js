import React, { Component } from 'react';
import logo from './snooker.svg';
import logo1 from './soccer.svg';
import logo2 from './tennis.svg';
import logo3 from './volley.svg';
import logo4 from './basket.svg';
import './App.css';



class Header extends Component {
  render() {

    var styles = {
      color:'white',
      background: 'green'
    }

    var styles1 = {
      color:'white',
      background: 'orange'
    }
    return (
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo" alt="logo" />
        <img src={logo4} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" alt="logo" />
        <img src={logo3} className="App-logo" alt="logo" />
                <h1 style={styles}> Halo Dunia, Salam Olahraga </h1>

                <h1 style = {styles1}> Judi itu Dilarang, tapi Uang Anda Sangat Berharga Bagi Kami </h1>
            </div>   
         );
      } 
    }  
export default Header;
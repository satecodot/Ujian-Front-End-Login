import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Statname from './Component/Statname'
// import axios from 'axios'


class App extends Component {
  constructor(){
    super();
    this.state={nama:''}
  }

  klik(){
    this.setState({nama: this.refs.nama.value});
  }
  render() {
   
    return (
      <div className="container">
      <Header/>
        <ul className="nav nav-tabs">
          <li className="active">
              <a className="nav-link active" data-toggle="tab" href="#log!">Login</a>
          </li>
          <li><a className="nav-link active" data-toggle="tab" href="#wel">Welcome</a></li>
        </ul>  
          
        <div className="tab-content">
        <div id="log" className="tab-pane fade in active">
          <label for="namae">Masukkan Nama Anda</label>
          <input className="form-control" id="namae" ref="nama" type="text"/><br/>
          <button type="submit" className="btn btn-primary" onClick={()=> {this.klik();}}>Klik!</button>
          </div>
          <div id="wel" className="tab-pane fade">
            <Statname nm={this.state.nama}/><br/><br/><br/>
          </div> 
          <Footer/> 
        </div> 
        </div>  
      

    );
  }
}

export default App;

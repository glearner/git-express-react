import React, { Component } from 'react';
import './App.css';
import Git from './Search/Git/git';
import Repo from './repo/repo';
import { Route  } from 'react-router-dom' 



class App extends Component {

  render() {
        return (
          <div className="App">
              <Route path="/"  exact component ={Git} />
              <Route path="/data/:id" component ={Repo} />
              </div>

        )
        }
      }




export default App;
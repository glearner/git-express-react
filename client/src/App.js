import React, { Component } from 'react';
import './App.css';
import Git from './Home/Git/git';
import Repo from './repo/repo';
import { Route , Switch } from 'react-router-dom' 



class App extends Component {

  render() {
        return (
          <div className="App">
            <Switch>
              <Route path="/"  exact component ={Git} />
              <Route path="/data/:id" component ={Repo} />
              </Switch>
              </div>
        )
        }
      }




export default App;
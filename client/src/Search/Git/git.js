import React, { Component } from 'react';
import axios from 'axios';
import Github from '../Github/github';
import Home from '../Home/Home';
import { Link } from 'react-router-dom'; 



class Git extends Component {

  state = {data: [],user : 'glearner'}

  onChangeHandler = (event)=>{
    event.preventDefault(); 
    if (event.key === 'Enter') {
      this.onClickHandler();
}
    let data = '';    
    data =  event.target.value; 
    this.setState({user: data})
}


  onClickHandler = ()=>{

    axios.get('/user', {
      params: {
        user: this.state.user
      }
    }).then(res=>{
      let c = res.data
      this.setState({data : c.items})
    });



}

  render() {
    
   const git =this.state.data ?(<div>{this.state.data.map((d,i)=>{
    return(
    <Link to={'/data/'+d.login} style={{ textDecoration: 'none' }} key={i}>
    <Github
      name={d.login}
      imageUrl={d.avatar_url}
      click={this.onClicked}
      key={i}/>
      </Link>
      ) 
      
  })}
</div>) : null;






return (
  <div>
    <Home
     change = {this.onChangeHandler}
     click = {this.onClickHandler}
      />
      {git}
  </div>
);
}
}




export default Git;
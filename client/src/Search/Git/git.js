import React, { Component } from 'react';
import axios from 'axios';
import Github from '../Github/github';
import Home from '../Home/Home';
import { Link } from 'react-router-dom' 



class Git extends Component {

  state = {data: [],user : 'glearner'}

  onChangeHandler = (event)=>{
    event.preventDefault(); 
    
    let data = '';    
    data =  event.target.value;

    console.log(data);
    this.setState({user: data})
}


  onClickHandler = ()=>{

    console.log('clicked')
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
    <Link to={'/data/'+d.login} key={i}>
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
import React, { Component } from 'react';
import axios from 'axios';


class Repo extends Component {

  state = {data: [],user : 'glearner'}

 
  componentDidMount(){
    let  user = this.props.match.params.id ;
    this.setState({user : user})
     console.log(user)
     axios.get('/repo', {
        params: {
          user: user
        }
      }).then(res=>{
        let c = res.data
        console.log(c)
        this.setState({data : c})
      });

 }

 

  render() {
    
   const git =this.state.data ?(<div>{this.state.data.map((d,i)=>{
    return(

        <div key={i}>
            <p> {d.name} </p>
            </div>
      ) 
      
  })}
</div>) : null;






return (
  <div>
      <h1>All Repos of {this.state.user}</h1>
      {git}
  </div>
);
}
}




export default Repo;
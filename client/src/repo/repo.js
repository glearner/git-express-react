import React, { Component } from 'react';
import axios from 'axios';


class Repo extends Component {

  state = {data: [],user : 'glearner'}

 
  componentDidMount(){
    let  user = this.props.match.params.id ;
    this.setState({user : user})
     axios.get('/repo', {
        params: {
          user: user
        }
      }).then(res=>{
        let c = res.data
        this.setState({data : c})
      });

 }

 

  render() {

   
    
   const git =this.state.data ?(<div>{this.state.data.map((d,i)=>{
    return(

        <div key={i}>
            <p><b> {d.name}</b> </p>
                       <div className="row">
                  <div className = "col-md-2 col-xs-2">
                    </div>
                  <div className = "col-md-8 col-xs-8">
                  {  d.description ? <p>{d.description}</p> : <p>No Description Available</p>}
                    </div>
                  <div className = "col-md-2 col-xs-2">
                    </div>
             </div>
             <hr/>
        </div>
      ) 
      
  })}
</div>) : null;






return (
  <div>
      <h1>All Repos of {this.state.user}</h1>
      <hr/>
      {git}
  </div>
);
}
}




export default Repo;
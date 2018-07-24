import React  from 'react';
import {Link} from 'react-router-dom';


const Github =(props)=>{

        return(
            <div className="jumbotron">
                <Link to="/data">
                <div className="float-left">
                    <img
                     style={{width : '5rem'}}
                     alt= {props.name}
                     src={props.imageUrl}/>
                    </div>
                <div>
                <p> {props.name}</p> 
        
                </div>
                   </Link>         
            </div>
        )


}


export default Github;
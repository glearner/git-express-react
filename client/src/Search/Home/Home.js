import React from 'react';
import './Home.css';


let Home =(props)=>{

        return(
            <div className="container">
            <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <form>
                            <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={props.change}  
                                    placeholder="Username of Git-User"/>
                                    <button 
                                    type="button"
                                    onClick={props.click} 
                                    className="btn btn-primary">
                                    Search</button>  
                            </div>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
          
        )
    }   


export default Home;
    
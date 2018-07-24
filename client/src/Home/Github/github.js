import React  from 'react';

const Github =(props)=>{

        return(
            <div className="jumbotron">
                <div className="float-left">
                    <img
                     style={{width : '5rem'}}
                     alt= {props.name}
                     src={props.imageUrl}/>
                    </div>
                <div className="row">
                <div className="col-md">
                    </div>
                <div className="col-md">
                <p> {props.name}</p> 
                    </div>
                <div className="col-md">
                    </div>
                
                </div>        
                <div className="row">
                        <div className="col-md-2 col-xs-2">
                            </div>
                    
                    </div>
            </div>
        )


}


export default Github;
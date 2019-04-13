import React from 'react';
import "./card.css";

const Card = props => (

    <div className="Card" style= {{width: "18rem"}}>
      <div className="devCard text-center" >
        <img src={props.image} className="card-img-top mt-5" alt={props.name}/>
        <div className="card-body">
          <h5 className="card-name">{props.name}</h5>
          <h6 className="card-text">Skills:</h6>
          <h6 className="card-skills">{props.skills}</h6>
          <a href="/" className="btn btn-primary mt-5">View Profile</a>
        </div>
       </div>
    </div>
      

);
   
	

  
 
export default Card;

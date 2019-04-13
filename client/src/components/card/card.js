import React from 'react';
// import "./card.css";

const Card = props => (
        <div className="card" style= {{width: "18rem"}}>
        <img src={props.image} className="card-img-top" alt={props.name}/>
        <div className="card-body">
          <h5 className="card-name">{props.name}</h5>
          <h6 className="card-text">Skills:</h6>
          <h6 className="card-skills">{props.skills}</h6>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
       </div>

);
   
	

  
 
export default Card;

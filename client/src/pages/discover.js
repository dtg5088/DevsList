import React, { Component } from 'react';
import Card from '../components/card';
import cards from '../cards.json.js';
import Wrapper from "../components/wrapper"
import '../App.css';

class Discover extends Component {

    state = {
        cards,

    };

    

    render(){
        return(
            <Wrapper>
                {this.state.cards.map(card => (

                        <Card
                        id={card.id}
                        key={card.id}
                        name={card.name}
                        image={card.image}
                        />                 
                ))}

            </Wrapper>
           

        );
    }   
}

export default Discover;
import React, { Component } from 'react';
import Card from '../components/card';
import cards from '../cards.json';
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
                        skills={card.skills}
                        image={card.image}
                        >  
                        </Card>
                ))}

            </Wrapper>
           

        );
    }   
}

export default Discover;
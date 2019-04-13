import React, {Component} from 'react';
import Profiletron from "../components/Profile-tron";
import cards from '../cards.json';
import '../App.css';

class Profile extends Component {
    // state = {
    //     cards,
    // };

    render(){
        return(
           
            <Profiletron></Profiletron>

        )
    }
}

export default Profile;
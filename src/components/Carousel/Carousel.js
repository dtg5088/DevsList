import React, { Component } from "react";
import data from "./data"
import Card from "../card"

class Carousel extends Component {
    constructor(props);
    this.state = {
        this.state = {
            developers: data.name,
            developer: data.name[0]
        }
    }

    nextDeveloper = () => {
        const newIndex = this.state.developer.id +1;
        this.state({
            developer: data.name[newIndex]
        })
    }

    previousDeveloper = () => {
        const newIndex = this.state.developer.id -1;
        this.state({
            developer: data.name[newIndex]
        })
    }

    render() {
        const {developers, developer} = this.state;
        return (
            <div className="Carousel">

                <button
                    onClick={() => this.nextDeveloper()}
                    disabled={developer.id === data.properties.length - 1}
                >Next</button>
                <button
                    onClick={() => this.previousDeveloper()}
                    disabled={property.index === 0}
                >Prev</button>

                <div className="page">
                    <section>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>Image slideshow React tutorial.</h1>
                    </section>

                    <Card property={property} />

                </div>
            </div>
        );
    }
}
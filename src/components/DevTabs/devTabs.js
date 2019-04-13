import React from 'react';
import FrontendDev from "../FrontendDev/frontendDev";
import BackendDev from "../BackendDev/backendDev";
import FullstackDev from "../FullstackDev/fullstackDev";

// import "./style.css";

class DevTabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isChecked: false,
        showFront: false,
        showBack: false,
        showFull: false,

      };
      this.swapToFrontEnd = this.swapToFrontEnd.bind(this);
      this.swapToBackEnd = this.swapToBackEnd.bind(this);
      this.swapToFullStack = this.swapToFullStack.bind(this);
    }

    _handleClick() {
        this.setState({ isChecked: !this.state.isChecked });
      }

    swapToFrontEnd() {
      this.setState(prevState => ({
        showFront: !prevState.showFront,
        showBack: false,
        showFull: false,
      }));
      
      console.log(this.state.showFront)
    }

    swapToBackEnd() {
      this.setState(prevState => ({
        showFront: false,
        showBack: !prevState.showBack,
        showFull: false,
      }));
      
      console.log(this.state.showBack)
    }

    swapToFullStack() {
      this.setState(prevState => ({
        showFront: false,
        showBack: false,
        showFull: !prevState.showComponent,
      }));
      
      console.log(this.state.showFull)
    }
  
    render() {
      return (
        <div>
          
            <button onClick={this.swapToFrontEnd}>Front End</button>
            <button onClick={this.swapToBackEnd}>BackEnd</button> 
            <button onClick={this.swapToFullStack}>Fullstack</button>

            {this.state.showFront ? <FrontendDev/> : null}
            {this.state.showBack ? <BackendDev/> : null}
            {this.state.showFull ? <FullstackDev/> : null}
 
          
        </div>
      );
    }
  
  }

export default DevTabs;

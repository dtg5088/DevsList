import React from 'react';
import Checkbox from "../components/Checkbox/checkbox";
import DevTabs from "../components/DevTabs/devTabs";
// import "./style.css";

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isChecked: false };
    }

    _handleClick() {
        this.setState({ isChecked: !this.state.isChecked });
      }
  
    render() {
      return (
        <div>
          <DevTabs/>  
          <Checkbox
            id="checkbox1"
            value="random1"
            name="example"
            label={
              <span>some unchecked component with event handled by react</span>
            }
            isChecked={this.state.isChecked}
            onChange={() => this._handleClick()}/>

          <button onClick={() => this._handleClick()}>click</button>
        </div>
      );
    }
  
  }

  export default Register;
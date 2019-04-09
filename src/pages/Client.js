import React from 'react';
import Radio from "../Radio/Radio";

class Frontend extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isChecked: false };
    }
 
    // _handleClick() {
    //     this.setState({ isChecked: !this.state.isChecked });
    //   }
      change = e => {
        this.setState ({
            [e.target.isChecked]: !this.state.isChecked
        });
    }
 
    render() {
      return (
        <div>
            <Radio
                id="techCheckbox1"
                value="HTML"
                name="techCheckbox1"
                label={
                <span>HTML</span>
                }
                // isChecked={this.state.isChecked}
                onChange={e => this.change(e)}
            />
 
            <Radio
                id="techCheckbox2"
                value="CSS"
                name="techCheckbox2"
                label={
                <span>CSS</span>
                }
                // isChecked={this.state.isChecked}
                onChange={() => this._handleClick()}
            />
 
            <Radio checked={true} />
 
 
 
          <button onClick={() => this._handleClick()}>click</button>
        </div>
      );
    }
 
  }
 
  export default Frontend;
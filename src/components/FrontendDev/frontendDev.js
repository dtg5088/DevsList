import React from "react";

const skills = ["react", "angular", "css", "html"];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {}
    };
    skills.forEach(skill => {
      this.state.skills[skill] = false;
    });
  }

  submit = () => {
    let arr = [];
    Object.keys(this.state.skills).forEach(key => {
      if (this.state.skills[key]) {
        arr.push(key);
      }
    });
    console.log("arr", arr.join(","));
  };

  change = e => {
    const { name } = e.target;
    const skills = Object.assign({}, this.state.skills);
    skills[name] = !skills[name];
    console.log(skills);

    this.setState({
      skills
    });
  };

  swapSkills = () => {};

  render() {
    return (
      <div>
        <button onClick={this.swapSkills}>Front End</button>
        <button onClick={this.swapSkills}>BackEnd</button>
        {Object.keys(this.state.skills).map(key => {
          const isChecked = this.state.skills[key];
          return (
            <div>
              <label>{key}</label>
              <input
                name={key}
                type="checkbox"
                checked={isChecked}
                onChange={this.change}
              />
            </div>
          );
        })}
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default Form;






// import React from 'react';
// import PropTypes from 'prop-types';
// import checkboxes from '../checkboxes/checkboxes';
// import Checkbox from '../Checkbox/checkbox';
// import { __values } from 'tslib';

// class Frontend extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       checkedItems: new Map(),
//       checkedBoxes: []
//     }

    
//     this.handleChange = this.handleChange.bind(this);
//     //this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   handleChange(e) {
//     e.persist()

//     const item = e.target.name;
//     const isChecked = e.target.checked;


//       // if(e.target.checked){
//       //   checkboxes.isChecked = true;
      
//       // }else {
//       //   checkboxes.isChecked = false;
  
//       // }

//       checkboxes.forEach( event =>{
//         console.log(event);
//         console.log(checkboxes.isChecked);
//       });


//     this.setState(prevState => ({ 


//       //[name]: values,
//       checkedItems: prevState.checkedItems.set(item, isChecked),
//       //checkboxes: prevState.checkboxes.set(item, status),
//       //checkedBoxes : !this.state.checkedBoxes.includes(e.target.name) && e.target.checked ? this.state.checkedBoxes.push(e.target.name) : this.state.checkedBoxes
//       //checkedBoxes : !this.state.ischecked ? this.state.checkedBoxes.push(e.target.name) : this.state.checkedBoxes
    
//     }));
    
    
    
//     console.log(e.target.name)
//     console.log(e.target.checked)
//     console.log(this.state.checkedBoxes)
//   }

//   onSubmit = e => {
//     e.preventDefault();
//     //this.props.onSubmit()
//     console.log(this.state);
//     this.setState({
//         checkboxes: [],
//     })
// }

//   render() {

    
//     return (
//       <form>
//       <React.Fragment>
//         {
//           checkboxes.map(item => (
//             <label key={item.key}>
//               <Checkbox 
//                 name={item.name} 
//                 checked={this.state.checkedItems.get(item.name)} 
//                 onChange={this.handleChange} />
//               <span>{item.name}</span>
//             </label>
//           ))
//         }
//         <button onClick={() => this.onSubmit()}>Submit</button>
//       </React.Fragment>
//       </form>
      
//     );
//   }
// }

// export default Frontend;
///////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import Checkbox from "../Checkbox/checkbox"
// // import "./style.css";

// class Frontend extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//       checkedBoxes: []
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//     // _handleClick() {
//     //     this.setState({ isChecked: !this.state.isChecked });
//     //   }
//       change = e => { 
//         console.log("this is check " + e.target.name)
//         console.log(e.target.checked)
//         this.setState ({

//             checkedBoxes : !this.state.checkedBoxes.includes(e.target.name) && e.target.checked ? this.state.checkedBoxes.push(e.target.name) : this.state.checkedBoxes

//             //[e.target.isChecked]: !this.state.isChecked
//             //array of checked boxes
//             //if current checkbox is checked then add
//         });

//         console.log(this.state.checkedBoxes)
//     }

//     handleInputChange(event) {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//     }
  
//     render() {
//       return (
//         <div>

//             <Checkbox
//                 id="techCheckbox1"
//                 value="HTML"
//                 name="techCheckbox1"
//                 label={
//                 <span>HTML</span>
//                 }
//                 // isChecked={this.state.isChecked}
//                 onChange={this.change}
//             />

//             <Checkbox
//                 id="techCheckbox2"
//                 value="CSS"
//                 name="techCheckbox2"
//                 label={
//                 <span>CSS</span>
//                 }
//                 // isChecked={this.state.isChecked}
//                 onChange={this.change}
//             />

//             <Checkbox checked={true} />



//           <button onClick={() => this.change}>click</button>
//         </div>
//       );
//     }
  
//   }

//   export default Frontend;
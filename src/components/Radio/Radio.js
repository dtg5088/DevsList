import React from 'react';


import React from 'react';

class Radio extends React.Component {
   render() {
     return (
       <div>
           <input
               type="radio"
               id={this.props.id}
               value={this.props.value}
               name={this.props.name}
               checked={this.props.isChecked}
               disabled={this.props.disabled}
               // onChange={ () => this.props.onChange() }
           />
           <label
               aria-hidden="true"
               htmlFor={this.props.id}
           />
           <label htmlFor={this.props.id}>
               {this.props.label}
           </label>
       </div>
     );
   }
 }

 export default Radio;

  




// import React from "react";


// function Radio(props) {
//     return (
//         <div className="container">
//           <div className="row mt-5">
//             <div className="col-sm-12">
//               <form onSubmit={this.handleFormSubmit}>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name=""
//                       value="option1"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.handleOptionChange}
//                       className="form-check-input"
//                     />
//                     Option 1
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="react-tips"
//                       value="option2"
//                       checked={this.state.selectedOption === "option2"}
//                       onChange={this.handleOptionChange}
//                       className="form-check-input"
//                     />
//                     Option 2
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="react-tips"
//                       value="option3"
//                       checked={this.state.selectedOption === "option3"}
//                       onChange={this.handleOptionChange}
//                       className="form-check-input"
//                     />
//                     Option 3
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="react-tips"
//                       value="option3"
//                       checked={this.state.selectedOption === "option3"}
//                       onChange={this.handleOptionChange}
//                       className="form-check-input"
//                     />
//                     Option 4
//                   </label>
//                 </div>
//                 <div className="form-group">
//                   <button className="btn btn-primary mt-2" type="submit">
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       );
// }
  

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selectedOption: "option1"
// //     };
// //   }

// //   handleOptionChange = changeEvent => {
// //     this.setState({
// //       selectedOption: changeEvent.target.value
// //     });
// //   };

// //   handleFormSubmit = formSubmitEvent => {
// //     formSubmitEvent.preventDefault();

// //     console.log("You have submitted:", this.state.selectedOption);
// //   };

  
   

// export default Radio;
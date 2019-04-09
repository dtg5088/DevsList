// import React from 'react';
// import Radio from "../Radio/radio";
// // import "./style.css";

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           selectedOption: ""
//         };
    
      

//     state = {
//         businessType: "",
//         businessSize: "",
//         webSiteGoal: "",
//         siteFunction: "",
//         siteInfoStorage: "",
//         siteBranding: "",
//         mobileApp: "",
//         mobileResponsive: "",

//     }

//     change = e => {
//         this.setState ({
//             [e.target.name.selectedOption]: e.target.value
//         });
//     };
      
//         handleFormSubmit = formSubmitEvent => {
//           formSubmitEvent.preventDefault();
//           this.setState(this.state.selectedOption)
//         //     businessType: "",
//         //     businessSize: "",
//         //     webSiteGoal: "",
//         //     siteFunction: "",
//         //     siteInfoStorage: "",
//         //     siteBranding: "",
//         //     mobileApp: "",
//         //     mobileResponsive: "" 
//         //     }, (this.state.selectedOption));
//         };
    
//         render() {
//         return (
//             <form>
//                 <div className="container">
//                 What type of business are you?
//                 <br/>
//                 <input 
//                     name = "businessType"
//                     placeholder="Online Store" 
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                 <br/>
//                 How big is your Franchise/ Company?
//                 <br/>
//                 <input 
//                     name = "businessSize"
//                     placeholder="small, Medium, Large" 
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                       {/* <div className="container"> */}
//           {/* <div className="row mt-5">
//             <div className="col-sm-12"> */}
//               {/* <form onSubmit={this.handleFormSubmit}> */}
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="businessSize"
//                       value="option1"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     Brand New
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="businessSize"
//                       value="option2"
//                       checked={this.state.selectedOption === "option2"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     Less that 1 year
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="businessSize"
//                       value="option3"
//                       checked={this.state.selectedOption === "option3"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     2-6 years
//                   </label>
//                   </div>
//                   <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="businessSize"
//                       value="option4"
//                       checked={this.state.selectedOption === "option4"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     7+ years
//                   </label>
//                   </div>
        


//                 <br/>
               
//                 What will your website do? Pick the best one to describe your goals:
//                 <br/>
//                 <textarea 
//                     name = "siteFunction"
//                     placeholder=" Allow my users direct access to my product" 
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                     {/* <div className="container"> */}
//           {/* <div className="row mt-5"> */}
//             {/* <div className="col-sm-12"> */}
//               {/* <form onSubmit={this.handleFormSubmit}> */}
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteFunction"
//                       value="option1"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     Show pictures, have physical info (phone number, address, email of employees), brief bio/photo of employees, pleasant design
//                   </label>
//                   </div>
//                   <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteFunction"
//                       value="option2"
//                       checked={this.state.selectedOption === "option2"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     All of the above, also adding an email sign up for your customers
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteFunction"
//                       value="option3"
//                       checked={this.state.selectedOption === "option3"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     All of the above, plus 1 of the following:
//                     <br/>
//                     1. a link to add directions through google maps to your business
//                     <br/>
//                     2. Creating an appointment calendar
//                     <br/>
//                     3. Adding an online payment option
//                     <br/>
//                     4. Clients of your business can create a user profile to keep track of appointments and payments.
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteFunction"
//                       value="option4"
//                       checked={this.state.selectedOption === "option4"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     All of the above
//                   </label>
//                 </div>
              
                
//                 <br/>
//                 Will your application store user information?
//                 <br/>
//                 <input 
//                     name = "siteInfoStorage"
//                     placeholder="Yes/No" 
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                  {/* <div className="container"> */}
//           {/* <div className="row mt-5">
//             <div className="col-sm-12"> */}
//               {/* <form onSubmit={this.handleFormSubmit}> */}
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteInfoStorage"
//                       value="option1"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     Yes
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteInfoStorage"
//                       value="option2"
//                       checked={this.state.selectedOption === "option2"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     No
//                   </label>
//                 </div>
            
            
//                 <br/>
//                 Are you looking for branding or re branding help?
//                 <br/>
//                 <input 
//                     name = "siteBranding"
//                     placeholder="Yes/No"
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                 {/* <div className="container"> */}
//           {/* <div className="row mt-5">
//             <div className="col-sm-12"> */}
//               {/* <form onSubmit={this.handleFormSubmit}> */}
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="siteBranding"
//                       value="option1"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.handleOptionChange}
//                       className="form-check-input"
//                     />
//                     Yes
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
//                     No
//                   </label>
//                 </div>
               
                

//                 <br/>
//                 Do you want to turn your website into a mobile app?
//                 <br/>
//                 <input 
//                     name = "mobileApp"
//                     placeholder="Yes/No" 
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                 {/* <div className="container"> */}
//           {/* <div className="row mt-5">
//             <div className="col-sm-12"> */}
//               {/* <form onSubmit={this.handleFormSubmit}> */}
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name=""
//                       value="mobileApp"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     Yes
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="mobileApp"
//                       value="option2"
//                       checked={this.state.selectedOption === "option2"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     No
//                   </label>
//                 </div>
             
//                 <br/>
//                 Do you want your online web application to be mobile friendly? (Have the site adjust to being easy to view on any device)
//                 <br/>
//                 <input 
//                     name = "mobileResponsive"
//                     placeholder="Yes/No" 
//                     value={this.state.businessType} 
//                     onChange={e => this.change(e)} 
//                 />
//                 {/* <div className="container"> */}
//           {/* <div className="row mt-5">
//             <div className="col-sm-12"> */}
//               {/* <form onSubmit={this.handleFormSubmit}> */}
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="mobileResponsive"
//                       value="option1"
//                       checked={this.state.selectedOption === "option1"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     Yes
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <label>
//                     <input
//                       type="radio"
//                       name="mobileResponsive"
//                       value="option2"
//                       checked={this.state.selectedOption === "option2"}
//                       onChange={this.change(e)}
//                       className="form-check-input"
//                     />
//                     No
//                   </label>
//                 </div>
//                 <br/>
//                 <button onClick={() => this.onSubmit()}>Submit</button>
//         </div>
//         </form>
        
        
            
            
//         );
//     }
// };
// }



// export default Form;
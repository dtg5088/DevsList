import React from 'react';
// import "./style.css";

class Form extends React.Component {

   state = {
       businessType: "",
       businessSize: "",
       webSiteGoal: "",
       siteFunction: "",
       siteInfoStorage: "",
       siteBranding: "",
       mobileApp: "",
       mobileResponsive: "",
       meetDev: ""

   }

   change = e => {
       this.setState ({
           [e.target.name]: e.target.value
       });
   }

   onSubmit = e => {
       e.preventDefault();
       this.props.onSubmit()
       console.log(this.state);
       this.setState({
           businessType: "",
           businessAge: "",
           webSiteGoal: "",
           siteFunction: "",
           siteInfoStorage: "",
           siteBranding: "",
           mobileApp: "",
           mobileResponsive: "",
           meetDev: ""
       })
   }

   render(){
       return (
           <form>

               What type of business are you?
               <br/>
               <input
                   name = "businessType"
                   placeholder="Online Store"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               How big is your Franchise/ Company?
               <br/>
               <input
                   name = "businessSize"
                   placeholder="small, Medium, Large"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               What is the goal of your website?
               <br/>
               <textarea
                   name = "webSiteGoal"
                   placeholder=" provide users with quality products"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               What will your website do?
               <br/>
               <textarea
                   name = "siteFunction"
                   placeholder=" Allow my users direct access to my product"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               Will your application store user information?
               <br/>
               <input
                   name = "siteInfoStorage"
                   placeholder="Yes/No"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               Are you looking for branding or re branding help?
               <br/>
               <input
                   name = "siteBranding"
                   placeholder="Yes/No"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               Do you want to turn your website into a mobile app?
               <br/>
               <input
                   name = "mobileApp"
                   placeholder="Yes/No"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
               Do you want your online web application to be mobile friendly?
               <br/>
               <input
                   name = "mobileResponsive"
                   placeholder="Yes/No"
                   value={this.state.businessType}
                   onChange={e => this.change(e)}
               />
               <br/>
<button onClick={() => this.onSubmit()}>Submit</button>
           </form>
       );
   }
}

export default Form;

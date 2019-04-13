import React from 'react';
import Radio from "../components/Radio/Radio";


 

  
  

class Frontend extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        company  : "",
        businessAge : "",
          websiteGoal : "",
          siteBranding : "",
          siteInfoStorage : "",
          siteLogo : "",
          mobileApp : "",
          mobileResponsive : "",
          meetDev : ""
       };
    }
 
    handleOptionChange = event => {
        event.preventDefault()
        const{name, value} = event.target
        this.setState({
          [name]: value
        });
      };

    handleSubmit = (event) => {
    event.preventDefault()
        console.log(
            this.state
        
        )} 
        // Make API call 
  
 
    render() {
      return (
        <div className="container" id="clientSurvey">
           <form>
            <div className="clientsName">
                <label className="form-group">
                    Company Name:
                    <input class="form-control" type="text" name="company" value={this.state.company} onChange={this.handleOptionChange} />
                </label>
            </div>
            <div className="qb">
                <p>Question 2: How old is your company?</p>
                
                    <Radio
                        id="Question2RadioA"
                        name="businessAge"
                        value="Brand New"
                        checked={this.state.businessAge === "Brand New"}
                        onChange={this.handleOptionChange}
                        className="form-class-input"
                        label={
                        <span>A) Brand New</span>
                        }
                        />
        
                    <Radio
                        id="Question2RadioB"
                        name="businessAge"
                        value="Less than 1 year old"
                        checked={this.state.businessAge === "Less than 1 year old"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        label={
                        <span>B) Less than 1 year old</span>
                        }
                    />

                    <Radio
                        id="Question2RadioC"
                    name="businessAge"
                        value="2-5 years old"
                        checked={this.state.businessAge === "2-5 years old"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        label={
                        <span>C) 2-5 years old</span>
                        }
                    />

                    <Radio
                        id="Question2RadioD"
                        name="businessAge"
                        value="6+ years old"
                        checked={this.state.businessAge === "6+ years old"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        label={
                        <span>D) 6+ years old</span>
                        }
                    />
            
                <br/>
                <br/>
            </div>
            <div className="qc">
                <p>Question 3: What will your website do? Pick the best one to describe your goals:</p>
                <Radio
                id="Question3RadioA"
                name="websiteGoal"
                value="Show pictures, have physical info (phone number, address, email of employees), brief bio/photo of employees, pleasant design"
                checked={this.state.websiteGoal === "option1"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>A) Show pictures, have physical info (phone number, address, email of employees), brief bio/photo of employees, pleasant design </span>
                }
              />
            <Radio
                id="Question3RadioB"
                name="websiteGoal"
                value="All of the above, also adding an email sign up for your customers"
                checked={this.state.websiteGoal === "All of the above, also adding an email sign up for your customers"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>B) All of the above, also adding an email sign up for your customers </span>
                }
            />
             <Radio
                id="Question3RadioC"
                name="websiteGoal"
                value="All of the above, plus 1 of the following (you can decide and discuss which option you need with your developer after youre matched): <br/> * A link to add directions through google maps to your business <br/>  *Creating an appointment calendar for your clients to use <br/> * Adding an online payment option <br/> *Clients of your business can create a user profile to keep track of appointments and payments."
                checked={this.state.websiteGoal === "All of the above, plus 1 of the following (you can decide and discuss which option you need with your developer after youre matched): <br/> * A link to add directions through google maps to your business <br/>  *Creating an appointment calendar for your clients to use <br/> * Adding an online payment option <br/> *Clients of your business can create a user profile to keep track of appointments and payments."}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>C) All of the above, plus 1 of the following (you can decide and discuss which option you need with your developer after youre matched): <br/> * A link to add directions through google maps to your business <br/>  *Creating an appointment calendar for your clients to use <br/> * Adding an online payment option <br/> *Clients of your business can create a user profile to keep track of appointments and payments. </span>
                }
               />
            <Radio
                id="Question3RadioD"
                name="websiteGoal"
                value="All of the above"
                checked={this.state.websiteGoal === "All of the above"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>D) All of the above </span>
                }
            />
            <br/>
            <br/>
        </div>
        <div className="qd">
            <p>Question 4: Will you require an original logo?</p>
        
            <Radio 
                id="Question4RadioA"
                name="siteLogo"
                value="Yes"
                checked={this.state.siteLogo === "Yes"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                    <span>Yes</span>
                }
                />
            <Radio 
            id="Question4RadioB"
            name="siteLogo"
            value="No"
            checked={this.state.siteLogo === "No"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
        </div>
        <div className="qe">
            <p>Question 5: Will your website require information storage? (ex: customer phone numbers, payment info, appointment history, etc)</p>
            <Radio
            id="Question5RadioA"
            name="siteInfoStorage"
            value="Yes"
            checked={this.state.siteInfoStorage === "Yes"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio 
            id="Question5RadioB"
            name="siteInfoStorage"
            value="No"
            checked={this.state.siteInfoStorage === "No"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
        </div>
        <div className="qf">
            <p>Question 6: Do you want a custom branding?</p>
            <Radio
            id="Question6RadioA"
            name="siteBranding"
            value="Yes"
            checked={this.state.siteBranding === "Yes"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            } 
            />
            <Radio 
            id="Question6RadioB"
            name="siteBranding"
            value="No"
            checked={this.state.siteBranding === "No"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
        </div>
        <div className="qg">
            <p>Question 7: Do you want your site to have a mobile app?</p>
            <Radio
            id="Question7RadioA"
            name="mobileApp"
            value="Yes"
            checked={this.state.mobileApp === "Yes"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio 
            id="Question7RadioB"
            name="mobileApp"
            value="No"
            checked={this.state.mobileApp === "No"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
        </div>
        <div className="qh">
            <p>Question 8: Do you want your wesbite to be mobile responsive?</p>
            <Radio
            id="Question8RadioA"
            name="mobileResponsive"
            value="Yes"
            checked={this.state.mobileResponsive === "Yes"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio
            id="Question8RadioB"
            name="mobileResponsive"
            value="No"
            checked={this.state.mobileResponsive === "No"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
        </div>
        <div className="qi">
            <p>Question 9: Do you want to work with your developer remotely or face to face?</p>
            <Radio
            id="Question9RadioA"
            name="meetDev"
            value="Yes"
            checked={this.state.meetDev === "Yes"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio
            id="Question9RadioB"
            name="meetDev"
            value="No"
            checked={this.state.meetDev === "No"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <Radio
            id="Question9RadioC"
            name="meetDev"
            value="No Preference"
            checked={this.state.meetDev === "No Preference"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No Preference</span>
            }
            />
        </div>
            </form>


 
            
 
          <button type="button" className="btn btn-danger" onClick={this.handleSubmit}>Save</button>
      
        </div>
      );
    }
 
  }
 
  export default Frontend;

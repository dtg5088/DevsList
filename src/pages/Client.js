import React from 'react';
import Radio from "../components/Radio/Radio";


class Frontend extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selectedOption: "option1" };
    }
 
    handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };
  
 
    render() {
      return (
        <div>
           <form>
           <p>Question 2: How old is your company?</p>
           
            <Radio
                id="Question2RadioA"
                name="businessSize"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
                className="form-class-input"
                label={
                <span>A) Brand New</span>
                }
                />
 
            <Radio
                id="Question2RadioB"
                name="businessSize"
                value="option2"
                checked={this.state.selectedOption === "option2"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>B) Less than 1 year old</span>
                }
               />

            <Radio
                id="Question2RadioC"
               name="businessSize"
                value="option3"
                checked={this.state.selectedOption === "option3"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>C) 2-5 years old</span>
                }
            />

            <Radio
                id="Question2RadioD"
                name="businessSize"
                value="option4"
                checked={this.state.selectedOption === "option4"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>D) 6+ years old</span>
                }
            />
            
                <br/>
                <br/>


                <p>Question 3: What will your website do? Pick the best one to describe your goals:</p>
                <Radio
                id="Question3RadioA"
                name="websiteGoal"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>A) Show pictures, have physical info (phone number, address, email of employees), brief bio/photo of employees, pleasant design </span>
                }
              />
            <Radio
                id="Question3RadioB"
                name="websiteGoal"
                value="option2"
                checked={this.state.selectedOption === "option2"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>B) All of the above, also adding an email sign up for your customers </span>
                }
            />
             <Radio
                id="Question3RadioC"
                name="websiteGoal"
                value="option3"
                checked={this.state.selectedOption === "option3"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>C) All of the above, plus 1 of the following (you can decide and discuss which option you need with your developer after youre matched): <br/> * A link to add directions through google maps to your business <br/>  *Creating an appointment calendar for your clients to use <br/> * Adding an online payment option <br/> *Clients of your business can create a user profile to keep track of appointments and payments. </span>
                }
               />
            <Radio
                id="Question3RadioD"
                name="websiteGoal"
                value="option4"
                checked={this.state.selectedOption === "option4"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                <span>D) All of the above </span>
                }
            />
            <br/>
            <br/>

            <p>Question 4: Will you require an original logo?</p>
            
            <Radio 
                id="Question4RadioA"
                name="siteBranding"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
                className="form-check-input"
                label={
                    <span>Yes</span>
                }
                />
            <Radio 
            id="Question4RadioB"
            name="siteBranding"
            value="option2"
            checked={this.state.selectedOption === "option2"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>

            <p>Question 5: Will your website require information storage? (ex: customer phone numbers, payment info, appointment history, etc)</p>
            <Radio
            id="Question5RadioA"
            name="siteInfoStorage"
            value="option1"
            checked={this.state.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio 
            id="Question5RadioB"
            name="siteInfoStorage"
            value="option2"
            checked={this.selectedOption === "option2"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
            <p>Question 6: Do you want a custom branding?</p>
            <Radio
            id="Question6RadioA"
            name="siteBranding"
            value="option1"
            checked={this.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            } 
            />
            <Radio 
            id="Question6RadioB"
            name="siteBranding"
            value="option2"
            checked={this.selectedOption === "option2"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
            <p>Question 7: Do you want your site to have a mobile app?</p>
            <Radio
            id="Question7RadioA"
            name="mobileApp"
            value="option1"
            checked={this.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio 
            id="Question7RadioB"
            name="mobileApp"
            value="option2"
            checked={this.selectedOption === "option2"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
            <p>Question 8: Do you want your wesbite to be mobile responsive?</p>
            <Radio
            id="Question8RadioA"
            name="mobileResponsive"
            value="option1"
            checked={this.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio
            id="Question8RadioB"
            name="mobileResponsive"
            value="option2"
            checked={this.selectedOption === "option2"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <br/>
            <br/>
            <p>Question 9: Do you want to work with your developer remotely or face to face?</p>
            <Radio
            id="Question9RadioA"
            name="meetDev"
            value="option1"
            checked={this.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>Yes</span>
            }
            />
            <Radio
            id="Question9RadioB"
            name="meetDev"
            value="option2"
            checked={this.selectedOption === "option2"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No</span>
            }
            />
            <Radio
            id="Question9RadioC"
            name="meetDev"
            value="option3"
            checked={this.selectedOption === "option3"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            label={
                <span>No Preference</span>
            }
            />
            </form>


 
            
 
          <button onClick={() => this._handleClick()}>click</button>
      
        </div>
      );
    }
 
  }
 
  export default Frontend;

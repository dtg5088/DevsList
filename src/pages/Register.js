import React from 'react';
import DevTabs from "../components/DevTabs/devTabs";


// import "./style.css";

class Register extends React.Component {

  state = {

    name: "",
    password: "",
    githubRepo: "",
    image: "",
    currentPosition: "",
    experience:"",
    location: "",
    education: "",
    certifications: "",
    professionalStatement: "",

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
    name: "",
    password: "",
    githubRepo: "",
    image: "",
    currentPosition: "",
    experience:"",
    location: "",
    education: "",
    certifications: "",
    professionalStatement: "",
  })
}
  
    render() {
      return (
        <div>

          <DevTabs/>  
          
        
          
        </div>
      );
    }
  
  }

  export default Register;
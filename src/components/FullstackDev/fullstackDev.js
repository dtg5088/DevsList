import React from "react";
import "../FrontendDev/frontendDev.css";

const skills = ["React", "Angular", "CSS", "Html", "JavaScript", "Jquery", "Bootstrap", "Materialize-CSS", "Sass", "LESS", "Heroku", "Git", "GitHub", "Ember", "Backbone", "HandleBars", "Cross-Browser-Development", "Grunt", "Karma", "Mocha","Nodejs", "JavaScript", "PHP", "Python", "Ruby-on-Rails", "Laravel", "Apache", "NGINX", "MySQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "XAMPP", "WampServer", "Laragon", "Jira", "Data-Factory", "Data-Generator"];

class BackendDev extends React.Component {
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

  swapSkills = () => {



  };

  render() {
    return (
      <div>
        <h3> FullStack Developer</h3>
        {Object.keys(this.state.skills).map(key => {
          const isChecked = this.state.skills[key];
          return (
            <div>
              <input
                name={key}
                type="checkbox"
                checked={isChecked}
                onChange={this.change}
              />
              <label>{key}</label>
            </div>
          );
        })}
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default BackendDev;
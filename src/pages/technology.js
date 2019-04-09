import React from 'react';
class Technology extends React.Component {

    render() {
        return (
          <div>
          <main>
            <section className="intro">
              <h2>Technology Explanataion</h2>
              <div>
                <p>
                  We completely understand that not everyone has an interest in technology. Our mission at Dev's List is to keep things simple. Below, we have provided a high level explanation of some of the skills you may need from a developer. We highly encourage you to take our questionnarie so we can ensure your satisfaction but for the do-it-yourselfers we hope this clears some things up.
                </p>
              </div>
            </section>
            </main>

            <div>
              <h2>Tecnhology Stacks Explained</h2>
              <div className="services">
                <div className="service-one">
                  <p className="service-title">Front end Technologies</p>
                  <p>
                    Front end is all about the look and feel of your website. It it how a user interacts and navigates the physical space of your application or website. A developer who specializes in front end tecnhologies will be able to help you with your design and website construction needs. They can also help with animations and effects on your project as well.
                  </p>
                </div>
                <div className="service-two">
                  <p className="service-title">Back End Technologies</p>
                  <p>
                    The back end is all about data. Developers who specialize in back end technologies will help you sort out of your data needs. If you need new website routes, a database setup, data management, API consturction, or anything else related to data you want a back end developer.
                  </p>
                </div>
                <div className="service-three">
                  <p className="service-title">Full Stack Web Developers</p>
                  <p>
                    Full stack developers are the swiss army knife of web dev. They are familiar with both front end and back end technologies and can help in many different facets of a project. When designing a website with data storage needs, one full stack developer could be your answer instead of two seperate deverlopers.
                  </p>
                </div>
              </div>
            </div>
            </div>
        );
    }
};

export default Technology;

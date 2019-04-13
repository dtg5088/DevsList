import React from 'react';
import Header from "../components/Header/Header";
class Main extends React.Component {

    render() {
        return (
          <div>
            <Header />
            <main>
              <section className="intro">
                <h2>Our purpose</h2>
                <div>
                  <p>
                    Devs List was created to facilitate communication
                    between client and developer and takes away the need
                    to be tech savvy! Client can now be confident in
                    getting the skilled developer that matches their
                    needs. And creates more opportunities for freelance
                    developers to offer their services GLOBALLY!
                  </p>
                </div>
              </section>

              <div>
                <h2 className="text-center">OUR SERVICES</h2>
                <div className="services">
                  <div className="card border-dark mb-3">
                    <p className="service-icon">
                      <i className="far fa-calendar-alt" />
                    </p>
                    <p className="service-title">Project Managers</p>
                    <p>
                      We know that sometimes a small company would have
                      a non-recurrent need for someone to organize the
                      activities of a team for a given project.
                    </p>
                  </div>
                  <div className="card border-dark mb-3">
                    <p className="service-icon">
                      <i className="fas fa-crop" />
                    </p>
                    <p className="service-title">Designers</p>
                    <p>
                      Sometimes theres the need to create a render,
                      improve a companys image or you are just in need
                      for a website overhaul; for this purpose we have a
                      team of ilustrators, UX/UI, visual and animation
                      experts.
                    </p>
                  </div>
                  <div className="card border-dark mb-3">
                    <p className="service-icon">
                      <i className="fas fa-code" />
                    </p>
                    <p className="service-title">Developers</p>
                    <p>
                      Maybe that overhaul may require to be more
                      substantial and it would need for comprehensive
                      approach from architecttual, coding and
                      engineering expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-inner">
                <div className="gallery-item-one" />
                <div className="gallery-item-two" />
                <div className="gallery-item-three" />
                <div className="gallery-item-four" />
                <div className="gallery-item-five" />
                <div className="gallery-item-six" />
              </div>

              <section>
                <div className="jumbotron jumbotron-fluid">
                  <h2>Why us</h2>
                  <div>
                    <p>
                      We are a team of experts that come from different
                      backgrounds, therefore we know that navigate in a
                      technological environment could be difficult and
                      overwhelming.{" "}
                    </p>
                    <p>
                      We are here to help you regardless if you are
                      proficient or not with this type of business to
                      cover your needs in the best way possible with the
                      least of pain for you and your team!
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Contact Us</h2>
                {/* <Contact /> */}
              </section>
            </main>
          </div>
        );
    }
}

export default Main;

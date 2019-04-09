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
                  Dev's List was created to facilitate communication between client and developer and takes away the need to be tech savvy! Client can now be confident in getting the skilled developer that matches their needs. And creates more opportunities for freelance developers to offer their services GLOBALLY!
                </p>
              </div>
            </section>

            <div>
              <h2>Our services</h2>
              <div className="services">
                <div className="service-one">
                  <p className="service-icon">
                    <i className="far fa-calendar-alt" />
                  </p>
                  <p className="service-title">Project Managers</p>
                  <p>
                    Mauris vitae turpis ut sem blandit consequat et at
                    ligula. Suspendisse quam lectus, tristique dapibus
                    sapien et, tempus suscipit nisl.
                  </p>
                </div>
                <div className="service-two">
                  <p className="service-icon">
                    <i className="fas fa-crop" />
                  </p>
                  <p className="service-title">Designers</p>
                  <p>
                    Nulla eu metus faucibus, vehicula tortor quis,
                    venenatis odio. Nullam purus mauris, feugiat in odio
                    vitae, posuere volutpat libero. Sed et convallis
                    libero.
                  </p>
                </div>
                <div className="service-three">
                  <p className="service-icon">
                    <i className="fas fa-code" />
                  </p>
                  <p className="service-title">Developers</p>
                  <p>
                    Ut ornare vitae enim a rhoncus. Nullam aliquet
                    tristique scelerisque. Sed volutpat dictum risus ac
                    laoreet. Suspendisse id lorem in enim sollicitudin
                    varius.
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
              <h2>Why us</h2>
              <div>
                <p>
                  Integer sit amet venenatis erat. Cras elementum tortor
                  odio, sit amet euismod nunc cursus ut. Donec
                  sollicitudin orci sed enim volutpat, volutpat rutrum
                  magna semper. Fusce leo lacus, pulvinar sit amet
                  dignissim in, consectetur eget nulla. Etiam ac turpis
                  augue. Sed tincidunt pulvinar tincidunt. Integer ac
                  blandit magna. Nulla dapibus convallis luctus.{" "}
                </p>
                <p>
                  Ut elementum urna sit amet elit egestas hendrerit.
                  Vivamus quis sem fringilla, tincidunt nisi non, congue
                  libero. Etiam cursus nulla quis sapien varius, eget
                  accumsan augue mattis. Cras accumsan sapien nulla, eu
                  eleifend odio tempus sit amet. Suspendisse gravida
                  hendrerit sapien, ut molestie mi pellentesque eget.
                  Aliquam eleifend velit vel libero elementum, vitae
                  consectetur nisl sollicitudin. Suspendisse volutpat
                  fringilla vehicula.
                </p>
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

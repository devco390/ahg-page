function HomePage() {
  const phone = "3222127114";
  return (
    <div>
      <div className="preloader">
        <div className="loader_34">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="home" className="header-area pt-100">
        <div className="shape header-shape-one">
          <img src="images/banner/shape/shape-1.svg" alt="shape" />
        </div>

        <div className="shape header-shape-tow animation-one">
          <img src="images/banner/shape/shape-2.svg" alt="shape" />
        </div>

        <div className="shape header-shape-three animation-one">
          <img src="images/banner/shape/shape-3.svg" alt="shape" />
        </div>
        <div className="shape header-shape-fore">
          <img src="images/banner/shape/shape-4.svg" alt="shape" />
        </div>

        <div className="navigation-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home">
                          Inicio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          Sobre nosotros
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#service">
                          Servicios
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#team">
                          Equipo
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          Contacto
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-btn ml-20 d-none d-sm-block">
                    <a className="main-btn" href={`tel:${phone}`}>
                      <i className="lni-phone"></i> 322 212 71 14
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="header-banner d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-sm-10">
                <div className="banner-content">
                  <h4
                    className="sub-title wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="1s"
                  >
                    Your trusted
                  </h4>
                  <h1
                    className="banner-title mt-10 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="2s"
                  >
                    <span>Interior</span> Design Partner for Home or Office
                  </h1>
                  <a
                    className="banner-contact mt-25 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="2.3s"
                    href="#contact"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner-image bg_cover"
            style={{
              backgroundImage: "url(images/banner/banner-image.jpeg)",
            }}
          ></div>
        </div>
      </header>

      <section id="about" className="about-area pt-80 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image mt-50 clearfix">
                <div className="single-image float-left">
                  <img src="images/about/about-1.jpeg" alt="About" />
                </div>
                <div data-aos="fade-right" className="about-btn">
                  <a className="main-btn" href={`tel:${phone}`}>
                    <span>10</span> años de experiencia
                  </a>
                </div>
                <div className="single-image image-tow float-right">
                  <img src="images/about/about-2.jpeg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-45">
                <h4 className="about-welcome">Sobre nosotros </h4>
                <h3 className="about-title mt-10">Razones para elegirnos</h3>
                <p className="mt-25">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages
                  <br /> <br />
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <a className="main-btn mt-25" href="#">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="services-area pt-125 pb-130 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-20">
                <h5 className="sub-title mb-15">Our Services</h5>
                <h2 className="title">What We Do?</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="services-icon">
                  <i className="lni-paint-roller"></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Interior Design</h4>
                  <p className="mt-20">
                    Mauris aliquam, turpis sed mattis placerat, justo risus
                    pellentesque quam, id finibus risus arcu eget neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <div className="services-icon">
                  <i className="lni-blackboard"></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Design Consultancy</h4>
                  <p className="mt-20">
                    Mauris aliquam, turpis sed mattis placerat, justo risus
                    pellentesque quam, id finibus risus arcu eget neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.2s"
              >
                <div className="services-icon">
                  <i className="lni-home"></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Residential Design</h4>
                  <p className="mt-20">
                    Mauris aliquam, turpis sed mattis placerat, justo risus
                    pellentesque quam, id finibus risus arcu eget neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="services-icon">
                  <i className="lni-briefcase"></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Commercial Design</h4>
                  <p className="mt-20">
                    Mauris aliquam, turpis sed mattis placerat, justo risus
                    pellentesque quam, id finibus risus arcu eget neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <div className="services-icon">
                  <i className="lni-handshake"></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Hospitality Design</h4>
                  <p className="mt-20">
                    Mauris aliquam, turpis sed mattis placerat, justo risus
                    pellentesque quam, id finibus risus arcu eget neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.2s"
              >
                <div className="services-icon">
                  <i className="lni-grow"></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Co-working Space Design</h4>
                  <p className="mt-20">
                    Mauris aliquam, turpis sed mattis placerat, justo risus
                    pellentesque quam, id finibus risus arcu eget neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team-area pt-125 pb-130 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-20">
                <h5 className="sub-title mb-15">Meet The Team</h5>
                <h2 className="title">Our Expert Designers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-team text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="team-image">
                  <img src="images/team/team-1.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h4 className="team-name">
                    <a href="#">Rob Hope</a>
                  </h4>
                  <span className="sub-title">CEO & Founder</span>
                  <ul className="social mt-25">
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-team text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <div className="team-image">
                  <img src="images/team/team-2.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h4 className="team-name">
                    <a href="#">Patric Green</a>
                  </h4>
                  <span className="sub-title">Chief Designer</span>
                  <ul className="social mt-25">
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-team text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.2s"
              >
                <div className="team-image">
                  <img src="images/team/team-3.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h4 className="team-name">
                    <a href="#">Daryl Dixon</a>
                  </h4>
                  <span className="sub-title">Consultant</span>
                  <ul className="social mt-25">
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-team text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.6s"
              >
                <div className="team-image">
                  <img src="images/team/team-4.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h4 className="team-name">
                    <a href="#">Mark Parker</a>
                  </h4>
                  <span className="sub-title">Intern</span>
                  <ul className="social mt-25">
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-20">
                <h5 className="sub-title mb-15">Contact us</h5>
                <h2 className="title">Get In touch</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form">
                <form
                  id="contact-form"
                  action="contact.php"
                  method="post"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          data-error="Name is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          data-error="Valid email is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          data-error="Subject is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          data-error="Phone is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <textarea
                          placeholder="Your Mesaage"
                          name="message"
                          data-error="Please,leave us a message."
                          required="required"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="col-md-12">
                      <div className="single-form form-group text-center">
                        <button type="submit" className="main-btn">
                          send message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="map-area">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
        <div
          className="map-bg bg_cover d-none d-lg-block"
          style={{
            backgroundImage: "background-image: url(images/map/map-bg.jpg)",
          }}
        ></div>
      </section>

      <footer id="footer" className="footer-area">
        <div className="footer-widget pt-80 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-8">
                <div className="footer-logo mt-50">
                  <a href="#">
                    <img src="images/logo.png" alt="Logo" />
                  </a>
                  <ul className="footer-info">
                    <li>
                      <div className="single-info">
                        <div className="info-icon">
                          <i className="lni-phone-handset"></i>
                        </div>
                        <div className="info-content">
                          <p>+1880 123 456 789</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-info">
                        <div className="info-icon">
                          <i className="lni-envelope"></i>
                        </div>
                        <div className="info-content">
                          <p>contact@yourmail.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-info">
                        <div className="info-icon">
                          <i className="lni-map"></i>
                        </div>
                        <div className="info-content">
                          <p>1234 Avenue New York, US</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="footer-social mt-20">
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-"></div>
          </div>
        </div>
      </section>

      <script src="js/vendor/modernizr-3.6.0.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>

      <script src="js/bootstrap.min.js"></script>

      <script src="js/wow.min.js"></script>

      <script src="js/slick.min.js"></script>

      <script src="js/scrolling-nav.js"></script>
      <script src="js/jquery.easing.min.js"></script>

      <script src="js/aos.js"></script>

      <script src="js/main.js"></script>
    </div>
  );
}

export default HomePage;

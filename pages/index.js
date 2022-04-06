import { useEffect, useState, useRef } from "react";

function HomePage() {
  const phone = "3222127114";
  const phoneTwo = "3219494837";
  const phoneWhatsapp = "+57-322-2127114";
  const parentAnimation = useRef();

  const toogleAnimationClass = () => {
    parentAnimation.current.classList.remove("banner-title--animation--init");
    parentAnimation.current.classList.remove("banner-title--animation");
    parentAnimation.current.offsetWidth;
    parentAnimation.current.classList.add("banner-title--animation");
  };

  const runAnimation = () => {
    toogleAnimationClass();
    const animationRunInterval = window.setInterval(() => {
      toogleAnimationClass();
    }, 14000);
  };

  useEffect(() => {
    const animationInitTimeout = window.setTimeout(() => {
      runAnimation();
      clearTimeout(animationInitTimeout);
    }, 16000);
    return () => clearTimeout(animationInitTimeout);
  }, []);
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
          <img src="images/banner/shape/shape-3.svg" alt="shape" />
        </div>

        <div className="shape header-shape-tow animation-one">
          <img src="images/banner/shape/shape-3.svg" alt="shape" />
        </div>

        <div className="shape header-shape-three animation-one">
          <img src="images/banner/shape/shape-3.svg" alt="shape" />
        </div>
        <div className="shape header-shape-fore">
          <img src="images/banner/shape/shape-3.svg" alt="shape" />
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
                          Unidades de negocio
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
                    <span>Somos más que una</span>
                    <br />
                    consultoría ambiental
                  </h4>

                  <h1
                    className={`banner-title banner-title--animation--init mt-10 wow fadeInUp`}
                    ref={parentAnimation}
                    data-wow-duration="1.5s"
                    data-wow-delay="2s"
                  >
                    <span className="slide slide-1">Hidrología</span>
                    <span className="slide slide-2">Hidrogeología</span>
                    <span className="slide slide-3">Aguas subterráneas</span>
                    <span className="slide slide-4">Geotecnia</span>
                    <span className="slide slide-5">Tramitología</span>
                    <span className="slide slide-6">Ingeniería Ambiental</span>
                    <span className="slide slide-7">Topografía</span>
                  </h1>

                  <a
                    className="main-btn banner-contact mt-25 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="2.3s"
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=${phoneWhatsapp}`}
                  >
                    !Asesórate ahora!
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
                  Contamos con una planta permanente de profesionales integrada
                  por geólogos, hidrogeólogos, geofísicos, geotecnistas,
                  meteorólogos, topógrafos e ingenieros ambientales, sanitarios,
                  civiles y profesionales en el área social conformando un
                  equipo interdisciplinario con experiencia y capacitación
                  especializada en el manejo y desarrollo de proyectos de
                  ingeniería.
                </p>
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
                <h5 className="sub-title mb-15">Unidades de negocio</h5>
                <h2 className="title">¿Qué hacemos?</h2>
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
                  <h4 className="services-title">Hidrología</h4>
                  <p className="mt-20">
                    <ul>
                      <li>
                        Hidráulica de ríos y drenajes (Flujo y transporte).
                      </li>
                      <li>
                        Análisis de eventos extremos (Sequías y crecientes).
                      </li>
                      <li>Estimación de caudal ecológico.</li>
                      <li>Balances Hídricos.</li>
                      <li>
                        Modelación y simulación de cantidad y calidad de los
                        recursos hídricos (Qual2K, HEC-RAS, HEC-HMS, Wasp
                        Versión 8.3).
                      </li>
                      <li>Prueba de trazadores en cuerpos de agua.</li>
                      <li>
                        Diseño de estructuras hidráulicas para captación y
                        conducción de agua, estabilización y protección de
                        riveras.
                      </li>
                      <li>Oceanografía.</li>
                    </ul>
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
                  <h4 className="services-title">
                    Exploración de aguas subterráneas
                  </h4>
                  <p className="mt-20">
                    <ul>
                      <li>
                        Ejecución de inventarios de captaciones, puntos de agua
                        y fuentes potenciales de contaminación.
                      </li>
                      <li>
                        Exploración regional y local de aguas subterráneas
                        (Exploración geológica, Hidrológica, Geofísica e
                        Hidrogeológica).
                      </li>
                      <li>
                        Planificación y desarrollo de aprovechamiento, manejo de
                        recarga de acuíferos.
                      </li>
                      <li>Ejecución y análisis de Pruebas Hidráulicas.</li>
                      <ul>
                        <li>Pruebas de bombeo 24 Horas.</li>
                        <li>Pruebas de bombeo Escalonadas.</li>
                        <li>Slug Test.</li>
                      </ul>
                      <li>
                        Modelación y simulación de aguas subterráneas
                        (Modelación de Acuíferos).
                      </li>
                      <li>Monitoreo de calidad de agua.</li>
                      <li>Diagnóstico, Mantenimiento y Limpieza de pozos.</li>
                      <li>
                        Asesoría e interventoría en construcción de pozos de
                        extracción de agua.
                      </li>
                      <li>Piezómetros y pozos de monitoreo ambiental.</li>
                      <li>Pozos exploratorios.</li>
                      <li>Pozos de aprovechamiento de agua.</li>
                      <li>Elaboración de perfil estratigráfico.</li>
                      <li>Estudios de tomografías eléctricas al suelo.</li>
                      <ul>
                        <li>Tomografías-</li>
                        <li>
                          Registros eléctricos verticales SEV’s – Identificación
                          de puntos estratégicos para la perforación de puntos
                          de agua subterránea.
                        </li>
                      </ul>
                    </ul>
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
                  <h4 className="services-title">Hidrogeología</h4>
                  <p className="mt-20">
                    <ul>
                      <li>Topobatimetrías.</li>
                      <li>Levantamientos topográficos.</li>
                      <li>Definición de linderos.</li>
                      <li>Aforos con ADCP.</li>
                      <li>Vuelos con DRON.</li>
                    </ul>
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
                  <h4 className="services-title">Geotecnia</h4>
                  <p className="mt-20">
                    <ul>
                      <li>Análisis interacción suelo-estructura.</li>
                      <li>Estabilidad de Taludes, laderas y excavaciones.</li>
                      <li>Evaluación y diseño de estructuras geotécnicas.</li>
                      <li>Diseño de control de erosión y vegetación.</li>
                      <li>Geotecnia vial.</li>
                      <li>
                        Reconocimiento geológico, geomorfológico y cartografía
                        geológica.
                      </li>
                    </ul>
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
                  <h4 className="services-title">Tramitología ambiental</h4>
                  <p className="mt-20">
                    <ul>
                      <li>Ocupación de cauce y concesión de Aguas.</li>
                      <li>
                        Permiso de Prospección y Exploración de Aguas
                        Subterráneas.
                      </li>
                      <li>Plan de uso eficiente y ahorro de agua – PUEAA.</li>
                      <li>Permisos de vertimientos.</li>
                      <li>Estudios de Impacto Ambiental – EIA.</li>
                      <li>
                        Planes de Manejo Ambiental – PMA y Vulnerabilidad para
                        operaciones mineras, explotación de hidrocarburos, obras
                        de infraestructura vial, rellenos sanitarios, plantas
                        industriales, estaciones de servicio entre otros.
                      </li>
                      <li>Informes de cumplimiento ambiental – ICA.</li>
                      <li>
                        Plan de Saneamiento y Manejo de Vertimientos – PSMV.
                      </li>
                      <li>Permiso de emisiones de fuentes fijas.</li>
                      <li>
                        Asesoría en cumplimiento normativo y requerimientos de
                        las autoridades ambientales.
                      </li>
                    </ul>
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
                  <h4 className="services-title">Ingeniería ambiental</h4>
                  <p className="mt-20">
                    <ul>
                      <li>Gerencia de Proyectos de ingeniería.</li>
                      <li>
                        Plan de remediación de suelos y agua subterránea
                        (Diseño, ejecución, asesoría).
                      </li>
                    </ul>
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
                  <h4 className="services-title">Servicios sociales</h4>
                  <p className="mt-20">
                    <ul>
                      <li>
                        Diseño e implementación de Programas de Educación
                        Ambiental.
                      </li>
                      <li>Gestión social.</li>
                      <li>
                        Conformación de redes sociales de monitoreo del agua.
                      </li>
                      <li>Manejo conflictos socioambientales.</li>
                      <li>
                        Cartografía social para el diálogo de saberes
                        territoriales.
                      </li>
                      <li>Estudios socioeconómicos.</li>
                      <li>Consulta previa. </li>
                      <li>
                        Diseño de estrategias sociales de adaptación al cambio
                        climático.
                      </li>
                      <li>Planeación y gestión del desarrollo.</li>
                    </ul>
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
                  <h4 className="services-title">
                    Distribuidores de insumos y dispositivos médicos
                  </h4>
                  <p className="mt-20">
                    <ul>
                      <li>Alcohol al 76-96% Pureza – Alcohol glicerinado.</li>
                      <li>Tapabocas Termosellados N95.</li>
                      <li>Guantes de Látex y Nitrilo.</li>
                      <li>Trajes de Bioseguridad.</li>
                      <li>Mascaras de oxigeno con reservorio.</li>
                      <li>Circuitos respiratorios.</li>
                    </ul>
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
                <h5 className="sub-title mb-15">Conoce el equipo</h5>
                <h2 className="title">Nuestros Expertos</h2>
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
                    <a href="#">Lyna Buitrago</a>
                  </h4>
                  <span className="sub-title">CEO</span>
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
                data-wow-delay="0.4s"
              >
                <div className="team-image">
                  <img src="images/team/team-1.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h4 className="team-name">
                    <a href="#">Santiago Ledesma Mira</a>
                  </h4>
                  <span className="sub-title">Ingeniero de proyectos</span>
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
                    <a href="#">Andrés F. Delgado Q.</a>
                  </h4>
                  <span className="sub-title">Ingeniero de proyectos</span>
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
                    <a href="#">Carlos Cortes Gómez</a>
                  </h4>
                  <span className="sub-title">Ingeniero de proyectos</span>
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
                    <a href="#">Adriana García Gutiérrez</a>
                  </h4>
                  <span className="sub-title">Ingeniera de proyectos</span>
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
                <h5 className="sub-title mb-15">Contáctanos</h5>
                <h2 className="title">Consulta con nosotros</h2>
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
                          placeholder="Nombre"
                          data-error="Nombre es requerido."
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
                          placeholder="Correo electrónico"
                          data-error="Correo electrónico es requerido."
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
                          placeholder="Asunto"
                          data-error="Asunto es requerido."
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
                          placeholder="Teléfono"
                          data-error="Teléfono es requerido."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <textarea
                          placeholder="Mensaje"
                          name="message"
                          data-error="Por favor. déjanos tu mensaje."
                          required="required"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="col-md-12">
                      <div className="single-form form-group text-center">
                        <button type="submit" className="main-btn">
                          Enviar mensaje
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8033489358954!2d-74.10912918517934!3d4.6291452435626566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b909adf0a41%3A0xb88e32089049f390!2zQ3JhLiA1MiAjIzE0LTQwLCBCb2dvdMOh!5e0!3m2!1ses-419!2sco!4v1645297641145!5m2!1ses-419!2sco"
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
            backgroundImage: "url(images/map/map-bg.jpeg)",
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
                          <a href={`tel:${phone}`}> 322 212 71 14</a> /{" "}
                          <a href={`tel:${phone}`}> 322 212 71 14</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-info">
                        <div className="info-icon">
                          <i className="lni-envelope"></i>
                        </div>
                        <div className="info-content">
                          <a
                            href="mailto:ahg.hidrogeologos@gmail.com"
                            target="_blank"
                          >
                            ahg.hidrogeologos@gmail.com
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-info">
                        <div className="info-icon">
                          <i className="lni-map"></i>
                        </div>
                        <div className="info-content">
                          <a
                            target="_blank"
                            href="https://www.google.com/maps/place/Cra.+52+%23%2314-40,+Bogot%C3%A1/@4.6291452,-74.1091292,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9b909adf0a41:0xb88e32089049f390!8m2!3d4.6291399!4d-74.1069405"
                          >
                            Carrera 52 # 14 - 40, Puente Aranda, Bogotá,
                            Colombia
                          </a>
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
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p>Copyright 2022 by AHG Group.</p>
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

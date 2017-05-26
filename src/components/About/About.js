import React, { Component } from 'react';

class FooterContainer extends Component {
  render() {
    return (
      <section id="about" className="bgS">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="title">QUIÉNES SOMOS?</h3>
                    <hr className="hr" />
                    <br/>
                    <br/>
                </div>
                <div className="col-md-6">
                    <img src="img/startup3.svg" alt="" className="img-responsive msxH" />
                </div>
                <div className="col-md-6 pd20 abouts">
                    <p>Somos una Start-up de desarrollo web y aplicaciones móviles, que nació con la intención de satisfacer de forma integral los requerimientos de nuestros clientes.</p>
                    <br/>
                    <p>Nos gusta y apasiona lo que hacemos. nos preocupamos por entregar un trabajo de calidad a todos 
                    nuestros clientes; es por ello que utilizamos las últimas tecnologías de desarrollo, para entregar 
                    un trabajo rápido, efectivo y eficaz.</p>
                    <br/>
                    <p>Nuestra mayor apuesta es siempre tener clientes satisfechos, que puedan recomendar a DoWhile 
                    más allá de su buen desempeño, sino también por la calidad de nuestra atención. Cada cliente es 
                    un mundo nuevo, único y merece un desarrollo personalizado.</p>
                </div>
            </div>
            <hr/>
            <div className="row pdt20">
                <div className="">
                    <div className="col-md-4 text-center">
                        <i className="material-icons">stars</i>
                        <h3 className="text-center conforta"><b>Misión</b></h3>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                    <div className="col-md-4 text-center">
                    <i className="material-icons">stars</i>
                        <h3 className="text-center conforta"><b>Visión</b></h3>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="material-icons">stars</i>
                        <h3 className="text-center conforta"><b>Valores</b></h3>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="pd20">
                    <div className="col-md-12 text-center">
                        <h3 className="text-center"><b>Nuestro equipo</b></h3>
                        <hr className="hr" />
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="col-md-3 text-center team">
                        <img src="img/developer.jpg" className="img-responsive" alt=""/>
                        <h3 className="text-center"><b>Juanito Perez</b></h3>
                        <h5><b>Cargo</b></h5>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                    <div className="col-md-3 text-center team">
                        <img src="img/developer.jpg" className="img-responsive" alt=""/>
                        <h3 className="text-center"><b>Juanito Perez</b></h3>
                        <h5><b>Cargo</b></h5>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                    <div className="col-md-3 text-center team">
                        <img src="img/developer.jpg" className="img-responsive" alt=""/>
                        <h3 className="text-center"><b>Juanito Perez</b></h3>
                        <h5><b>Cargo</b></h5>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                    <div className="col-md-3 text-center team">
                        <img src="img/developer.jpg" className="img-responsive" alt=""/>
                        <h3 className="text-center"><b>Juanito Perez</b></h3>
                        <h5><b>Cargo</b></h5>
                        <hr className="hr" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis lorem, facilisis id eleifend non, auctor ut velit. Phasellus vel vulputate mi. Ut egestas lorem nulla. Ut vel ipsum
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default FooterContainer;

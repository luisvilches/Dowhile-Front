import React, { Component } from 'react';

class FooterContainer extends Component {
  render() {
    return (
      <section className="bgS" id="servicios"> 
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="title">Nuestros servicios</h3>
                    <hr className="hr" />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">phone_iphone</i>
                    <h4 className="service-heading">Aplicaciones moviles</h4>
                    <p className="text-muted">Desarrollo de aplicaciones nativas e híbridas, nos ajustamos a los requerimientos de tu idea de negocio.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">web</i>
                    <h4 className="service-heading">Desarrollo Web</h4>
                    <p className="text-muted">Desarrollo de sistemas y portales web de fácil administración y que además cuentan con las más diversas herramientas.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">settings</i>
                    <h4 className="service-heading">Desarrollo de sotware</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi eu neque eleifend posuere ac feugiat arcu. Donec aliquam</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default FooterContainer;

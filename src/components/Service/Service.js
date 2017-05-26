import React, { Component } from 'react';

class FooterContainer extends Component {
  render() {
    return (
      <section className="bgS" id="service"> 
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="title">Nuestros servicios</h3>
                    <hr className="hr" />
                    <h2 className="name2 textBlack"><span className="bgb">Amamos</span> lo que hacemos</h2>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">web</i>
                    <h4 className="service-heading">Desarrollo Web</h4>
                    <p className="text-muted">Desarrollo de sistemas y portales web de fácil administración y que además cuentan con las más diversas herramientas.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">phone_iphone</i>
                    <h4 className="service-heading">Aplicaciones moviles</h4>
                    <p className="text-muted">Desarrollo de aplicaciones nativas e híbridas, nos ajustamos a los requerimientos de tu idea de negocio.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">settings</i>
                    <h4 className="service-heading">Desarrollo de sotware</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi eu neque eleifend posuere ac feugiat arcu. Donec aliquam</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">grain</i>
                    <h4 className="service-heading">Imagen corporativa</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi eu neque eleifend posuere ac feugiat arcu. Donec aliquam</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">view_comfy</i>
                    <h4 className="service-heading">Community management</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi eu neque eleifend posuere ac feugiat arcu. Donec aliquam</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">lightbulb_outline</i>
                    <h4 className="service-heading">Fábrica de Ideas</h4>
                    <p className="text-muted">Juntos crearemos una gran propuesta, que se adapte a tu negocio y tus necesidades.</p>
                </div>
                
            </div>
        </div>
    </section>
    );
  }
}

export default FooterContainer;


/*

<div className="col-md-4 text-center">
                    <i className="material-icons iconService">important_devices</i>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Diseños interactivos, atractivos y amigables. Adaptables a todo tipo de dispositivo.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">store_mall_directory</i>
                    <h4 className="service-heading">Tiendas online</h4>
                    <p className="text-muted">Servicios para la creación y diseño de tiendas virtuales, para ventas online con la última tecnología en programación Web</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="material-icons iconService">build</i>
                    <h4 className="service-heading">Asistencia Técnica</h4>
                    <p className="text-muted">Cambios y reestructura de sitios o aplicaciones ya implementados, asistencia técnica a todos nuestros desarrollos.</p>
                </div>
                


*/
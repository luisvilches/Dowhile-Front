import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class FooterContainer extends Component {
  render() {
    return (
      <section className="success">
        <div className="container">
            <Carousel controls={false} indicators={false} interval={3000}>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2><b>DISEÑO</b> A LA MEDIDA</h2>
                            <hr className="hr" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>Somos apasionados de las Tecnologias de la información, desarrollamos servicios WEB para ti y tu negocio. Si quieres realizar un proyecto digital que se destaque, vamos a ser buenos amigos.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2><b>DISEÑO</b> A LA MEDIDA</h2>
                            <hr className="hr" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>Somos apasionados de las Tecnologias de la información, desarrollamos servicios WEB para ti y tu negocio. Si quieres realizar un proyecto digital que se destaque, vamos a ser buenos amigos.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2><b>DISEÑO</b> A LA MEDIDA</h2>
                            <hr className="hr" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>Somos apasionados de las Tecnologias de la información, desarrollamos servicios WEB para ti y tu negocio. Si quieres realizar un proyecto digital que se destaque, vamos a ser buenos amigos.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
    );
  }
}

export default FooterContainer;

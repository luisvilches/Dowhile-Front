import React, { Component } from 'react';
import {ButtonGroup,Button} from 'react-bootstrap'
import Herramientas from '../../components/Herramientas/Herramientas';

class FooterContainer extends Component {
  render() {
    return (
      <div>
          <section id="portfolio" className="bgS">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3 className="title">Últimos trabajos</h3>
                            <hr className="hr"/>
                            <br/>
                            <br/>
                            <ButtonGroup>
                                <Button>Todos</Button>
                                <Button>Aplicaciones web</Button>
                                <Button>Aplicaciones moviles</Button>
                                <Button>Landing page</Button>
                                <Button>Diseño</Button>
                            </ButtonGroup>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <a href="http://www.chilito.cl" rel="noopener noreferrer" target="_blank" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="material-icons">link</i>
                                    </div>
                                </div>
                                <img src="img/chilito.png" className="img-responsive" alt="Cabin" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="http://viveroscopequen.luisvilches.cl" rel="noopener noreferrer" target="_blank" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="material-icons">link</i>
                                    </div>
                                </div>
                                <img src="img/viveros.png" className="img-responsive" alt="Slice of cake" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="http://www.chilito.cl" rel="noopener noreferrer" target="_blank" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="material-icons">link</i>
                                    </div>
                                </div>
                                <img src="img/chilito.png" className="img-responsive" alt="Cabin" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="http://viveroscopequen.luisvilches.cl" rel="noopener noreferrer" target="_blank" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="material-icons">link</i>
                                    </div>
                                </div>
                                <img src="img/viveros.png" className="img-responsive" alt="Slice of cake" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="http://www.chilito.cl" rel="noopener noreferrer" target="_blank" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="material-icons">link</i>
                                    </div>
                                </div>
                                <img src="img/chilito.png" className="img-responsive" alt="Cabin" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="http://viveroscopequen.luisvilches.cl" rel="noopener noreferrer" target="_blank" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="material-icons">link</i>
                                    </div>
                                </div>
                                <img src="img/viveros.png" className="img-responsive" alt="Slice of cake" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Herramientas />
      </div>
    );
  }
}

export default FooterContainer;


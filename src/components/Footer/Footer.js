import React, { Component } from 'react';
import {ButtonGroup,Button,Form} from 'react-bootstrap'

class FooterContainer extends Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-left">
                        <p>Tienes Alguna Pregunta</p>
                        <br/>
                        <br/>
                        <div className="pfooter">
                            <p><i className="material-icons">phone_android</i><span><b> Teléfono:</b> +56 9 8888 8888</span></p>
                            <p><i className="material-icons">mail</i><span><b> Email:</b> hola@dowhile.cl</span> </p>
                        </div>           
                    </div>
                    <div className="col-lg-4">
                        <p>Síguenos en nuestras redes sociales!</p>
                        <br/>
                        <ul className="list-inline">
                            <li>
                                <a rel="noopener noreferrer" href="https://www.facebook.com/Dowhile-249855992087726" target="_blank" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://www.instagram.com/dowhile.cl/" target="_blank" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-instagram"></i></a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://twitter.com/DowhileCL" target="_blank" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                        </ul>       
                    </div>
                    <div className="col-lg-4">
                        <p>Suscribete a nuestro <br/> NewsLetter</p>
                        <br/>
                        <Form inline>
                            <input type="text" className="form-control" placeholder="Ingresar Correo Electronico"/>
                            <Button bsStyle="info" className="suscrib">Suscribirse</Button>
                        </Form>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="row gbfooter">
            <div className="col-lg-12">
                Copyright &copy; Dowhile 2017
            </div>
        </div>
    </footer>
    );
  }
}

export default FooterContainer;

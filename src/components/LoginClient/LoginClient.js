import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

class Area extends Component {
    constructor(props){
        super(props);

        this.state = {
            login: false
        }
    }
  render() {
    return (
      <section className="bgS" id="service"> 
        <div className="container">
            <div className="row">
                {this.state.login ? null : <Login />}
            </div>
        </div>
    </section>
    );
  }
}

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            login: false
        }
    }
  render() {
    return (
      <section className="bgS logiin"> 
        <div className="container">
            <div className="row">
                <p className="text-center conforta accessTitle">Acceso de clientes</p>
                <br/>
                <Form className="text-center">
                    <input type="text" className="form-control mxLogin" placeholder="Correo electronico"/>
                    <br/>
                    <input type="password" className="form-control mxLogin" placeholder="Password"/>
                    <br/>
                    <Button bsStyle="primary" className="form-control mxLogin">Ingresar</Button>
                </Form>
            </div>
        </div>
    </section>
    );
  }
}

export default Area;

import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import {Link} from 'react-router';


class App extends Component {

    scrollStep(id) {
        var ubicacion = $(`#${id}`);
        var posicion = ubicacion.offset().top;

        $('html, body').animate({ scrollTop: posicion }, 'slow');
    }
    render() {
        return (
        <header>
            <div className="container" id="maincontent">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-text">
                            <img className="img-responsive aaa" src="img/idea.svg" alt=""/>
                            <h1 className="name">Ideas creativas</h1>
                            <h2 className="name2">diseños inteligentes</h2>
                            <span className="skills">resultados tangibles</span>
                            <br/>   
                            <br/>
                            <div className="form-group col-xs-12">
                                <Link to='/contact' className="btn btn-success btn-lg">Contactenos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}

export default App;

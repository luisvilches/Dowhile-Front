import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

class FooterContainer extends Component {

    handleScroll(event) {
        let scrollTop = event.target.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
        if(scrollTop > 100) {
            document.getElementById('mainNav').classList.add('affix');
        } else {
            document.getElementById('mainNav').classList.remove('affix');
        }
    }

    scrollStep(id) {
        var ubicacion = $(`#${id}`);
        var posicion = ubicacion.offset().top;

        $('html, body').animate({ scrollTop: posicion }, 'slow');
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this))
        
    }

    render() {
        return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i>
                    </button>
                    <Link className="navbar-brand logo" href="/"><img src="img/logo.svg" alt=""/><span>Dowhile</span></Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li className="page-scroll">
                            <Link to="/about">¿Quienes somos?</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="/service">Servicios</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="/portfolio">Portafolio</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="/area">Área de clientes</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default FooterContainer;

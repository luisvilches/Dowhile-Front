import React, { Component } from 'react';
import $ from 'jquery';

class FooterContainer extends Component {

    componentDidMount(){
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    }

    render() {
        return (
        <section id="contact" className="bgS">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="title">¿TIENES UN PROYECTO EN MENTE?</h3>
                        <hr className="hr"/>
                        <p>Contáctenos ahora!</p>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form name="sentMessage" id="contactForm">
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre" id="name" required data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Correo electrónico</label>
                                    <input type="email" className="form-control" placeholder="Correo electrónico" id="email" required data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>teléfono</label>
                                    <input type="tel" className="form-control" placeholder="teléfono" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Mensaje</label>
                                    <textarea rows="5" className="form-control" placeholder="Mensaje" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div className="row">
                                <div className="form-group col-xs-12">
                                    <button type="submit" className="btn btn-success btn-lg pull-right">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default FooterContainer;

import React, { Component } from 'react';

var dev = 'http://localhost:5000'

class FooterContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            api: dev,
            data: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/servicios')
        .then(res => res.json())
        .then(response => {
            this.setState({
                data: response.data
            })
        })
    }
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
                {this.state.data.map((item,index) => {
                    return(
                        <div className="col-md-4 text-center">
                            <i className="material-icons iconService">{item.icon}</i>
                            <h4 className="service-heading">{item.name}</h4>
                            <p className="text-muted">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    );
  }
}

export default FooterContainer;

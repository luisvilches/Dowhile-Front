import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

var dev = 'http://localhost:5000'

class FooterContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            api:dev,
            banner:[]
        }
    }

    banner(){
        fetch(`${this.state.api}/banner`)
        .then(res => res.json())
        .then(response =>{ 
            this.setState({
                banner: response.data
            })
            console.log(response)
        })
    }
    componentDidMount(){
        setTimeout(this.banner(),5000);
    }
  render() {
    return (
      <section className="success">
        <div className="container">
            <Carousel controls={false} indicators={false} interval={3000}>
                {this.state.banner.map((item,index) => {
                    return(
                        <Carousel.Item key={index}>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="monse">{item.name}</h2>
                                    <hr className="hr" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    </section>
    );
  }
}

export default FooterContainer;

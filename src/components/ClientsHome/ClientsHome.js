import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        fetch(`${this.state.api}/clientesBanner`)
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
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
        };
    return (
      <section id="clientsHome">
        <div className="container">
            <h4 className="text-center">Han confiado en nosotros</h4>
            <hr className="hr" />
            <br/>
            <br/>
            {this.state.banner.map((item,index) => {
                return(
                    <div className="col-lg-2 text-center">
                        <img src={item.imagen} className="img-responsive clientesHome" alt="" title={item.name}/>
                    </div>
                )
            })}
        </div>
    </section>
    );
  }
}

export default FooterContainer;


/*


*/
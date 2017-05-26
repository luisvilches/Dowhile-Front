import React, { Component } from 'react';
import Headers from '../../components/Headers/App';
import Servicios from '../../components/Servicios/Servicios';
import Banners from '../../components/Banners/Banners';
import Contact from '../../components/Contact/Contac';
//import Headers from '../../components/Headers/App';

class FooterContainer extends Component {
  render() {
    return (
    <div>
        <Headers />
        <Servicios />
        <Banners />
    </div>
    );
  }
}

export default FooterContainer;
import React,{Component} from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


class BaseCompoenent extends Component{
    render(){
        return(
            <div>
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default BaseCompoenent;


//
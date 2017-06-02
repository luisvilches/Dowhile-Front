import React, { Component } from 'react';
import {Form,Button,ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router';

var post = [
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
]

var categoria = [
    {name:'categotia 1'},
    {name:'categotia 2'},
    {name:'categotia 3'},
    {name:'categotia 4'}
]
class Blog extends Component {
    constructor(props){
        super(props);

        this.state = {
            login: false
        }
    }
  render() {
    return (
      <section className="bgS" id="blog"> 
          <br/>
          <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p className=" pull-right blogTitle">Blog</p>
                </div>
                <div className="col-md-12">
                    <ButtonToolbar className=" pull-right">
                        {categoria.map((item,index) => {
                            return(<Button key={index}>{item.name}</Button>)
                        })}
                    </ButtonToolbar>
                    <br/>
                    <br/>
                    <br/>
                </div>
                {post.map((item,index) => {
                    return(
                        <Link to="/blog/int" className="cursor" key={index}>
                            <div className="col-md-3 bgWhite">
                                <img src={item.img} alt="" className="img-responsive"/>
                                <div className="contentBlog">
                                    <br/>
                                    <p><i className="material-icons">watch</i> {item.date}</p>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </section>
    );
  }
}


export default Blog;

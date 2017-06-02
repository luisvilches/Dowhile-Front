import React, { Component } from 'react';
import {Form,Button,ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router'

var post = [
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
    {img:'img/head.png',date:'9 min ago',title: 'Titulo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis magna orci, vel facilisis metus maximus vel. Sed facilisis nunc in '},
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
                <img src='img/post.jpg' alt="" className="img-responsive imgPost"/>
                <br/>
                <p className=" pull-right"><i className="material-icons">watch</i> 9 min ago</p>
                <br/>
                <h1 className=" text-center blogTitle">¿Para qué sirven los followers?</h1>
                <br/>
                <br/>
                <div>
                    <br/>
                    <p>A estas alturas del partido todas las empresas saben que necesitan estar presentes en redes sociales sin embargo, los objetivos de una estrategia social media no acaban ahí.</p>
                    <p>Según los informes más recientes sobre redes sociales elaborados por la Fundación Telefónica, el 42% de las pymes  españolas poseen una cuenta activa en Facebook, Twitter y Linkedin, pero sólo dos de cada diez declara tener un retorno importante de sus acciones en redes sociales. Semejante afirmación nos obliga a plantearnos una cuestión básica:</p>
                    <h5>¿Qué objetivos perseguimos con nuestras acciones en redes sociales?</h5>
                    <p>Las respuestas más repetidas son:</p>
                    <br/>
                    <ul>
                        <li>Incrementar las visitas hacia una web es decir, mejorar el   tráfico.</li>
                        <li>Multiplicar el alcance de las publicaciones de un blog.</li>
                        <li>Mejorar la tasa de conversión de una web.</li>
                    </ul>
                    <br/>
                    <p>Tres objetivos diferentes que persiguen un mismo fin: que los followers en redes sociales conviertan, es decir que interactúen dentro de la web. Google Analytics es una herramienta muy eficaz para lograr este fin ya que nos permite conocer los datos de tráfico social para analizar más al detalle las acciones de los followers. Analytics permite crear segmentos personalizados a los que añadir las URL´s de las redes sociales en las que tu empresa tenga presencia así podrás conocer las visitas generadas desde cada red social y analizar cómo los usuarios de redes sociales han interactuado con los enlaces hacia la web publicados en las diferentes redes sociales.</p>
                </div>
                <p className="blogContent"></p>
            </div>
            <div className="row">
                <br/>
                <br/>
                <p>Articulos relacionados:</p>
                <br/>
                <br/>
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

import React, { Component } from 'react';

class FooterContainer extends Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-inline">
                            <li>
                                <a rel="noopener noreferrer" href="https://www.facebook.com/Dowhile-249855992087726" target="_blank" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://www.instagram.com/dowhile.cl/" target="_blank" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-instagram"></i></a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://twitter.com/DowhileCL" target="_blank" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        Copyright &copy; Dowhile Inc 2017
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default FooterContainer;

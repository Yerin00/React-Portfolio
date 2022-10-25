import React from 'react';
import { Link } from 'react-router-dom';

function FooterComponent() {
  return (
    <div className="footer mt-5">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2 txtWhite">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:zlekfl0311@gmail.com">
                            zlekfl0311@gmail.com</a>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a href="https://velog.io/@zlekfl0311">velog</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright ChoiYerin</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FooterComponent
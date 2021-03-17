import React, { Component } from 'react';
 class HeaderComponent extends Component {
    render() {
        
        return (
            <nav className=" navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
            <div className="text-left">
            <a className="navbar-brand text-white" href="/home">
                HOME</a>
                
                <a className="navbar-brand text-white" href="/custInfo">
                PLANS</a>
               
               
                <a className="navbar-brand text-white" href="/sign">
                    Our Customers                
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
                </div>
                <div className="text-right">
                <div className="collapse navbar-collapse text-right" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/addcustomer">
                                Register
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/SignIn">
                                Login
                            </a>
                        </li>
                      <li className="nav-item"> 
                    <a className="nav-link text-warning" href="/Admin">
                       Admin
                      </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
        )
    }
}
export default HeaderComponent;
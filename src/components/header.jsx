import React from 'react';

const Header = React.createClass({

    render() {

        return (

            <div className="header">
                <div className="content">
                    <a className="logo-container">
                        <img src="http://careers.godeltech.com/wp-content/themes/godeltechnologies/img/logo.svg"/>
                    </a>
                    <nav className="navbar">
                        <div className="nav-left">
                            <span className="nav-item">
                                Jobs
                            </span>
                            <span className="nav-item">
                                Why Godel?
                            </span>
                            <span className="nav-item">
                                Meet the Team
                            </span>
                            <span className="nav-item">
                                News
                            </span>
                            <span className="nav-item">
                                Contact Us
                            </span>
                        </div>
                    </nav>
                </div>
            </div>

        )

    }

})

export default Header;

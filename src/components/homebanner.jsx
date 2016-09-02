import React from 'react';

const HomeBanner = React.createClass({

    render() {
        return (

            <section className="home-banner">
            <video autoPlay loop muted className="home-banner-video" src="http://careers.godeltech.com/wp-content/uploads/2015/10/Loop-LQ.mp4" type="video/mp4"/>
            </section>

        )
    }

})

export default HomeBanner;

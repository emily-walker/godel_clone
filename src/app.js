import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import HomeBanner from './components/homebanner.jsx';

const App = React.createClass({

    render() {
        return ( < div className = "wrapper" >
            < Header / >
            < div className = "page-content" >
            < HomeBanner / >
            < /div> < /div >
        )
    }

})

ReactDOM.render( < App / > , document.getElementById('app'));

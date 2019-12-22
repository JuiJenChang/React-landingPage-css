import React, { Component } from 'react';
import './SlidePage.css';

class SlidePage extends Component {
    render() {
        return (
            <div>
                <div className="sp-left" >
                    <h1>CG Generalist</h1>
                    <a href="#" >LET'S GO</a>
                </div>
                <div className="sp-right" >
                    <h1>Designer/Developer</h1>
                    <a href="#" >LET'S GO</a>
                </div>
            </div>
        );
    }
}

export default SlidePage;
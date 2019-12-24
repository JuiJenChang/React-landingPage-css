import React, { Component } from 'react';
import './SlidePage.css';

class SlidePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leftHover: false,
            rightHover: false,
        }
    }

    onMouseEnterLeft = () => {
        this.setState({
            rightHover: true,
        })
    }

    onMouseLeaveLeft = () => {
        this.setState({
            rightHover: false,
        })
    }

    onMouseEnterRight = () => {
        this.setState({
            leftHover: true,
        })
    }

    onMouseLeaveRight = () => {
        this.setState({
            leftHover: false,
        })
    }
    
    render() {
        return (
            <div>
                <div className="sp-left"
                    onMouseEnter={this.onMouseEnterLeft} onMouseLeave={this.onMouseLeaveLeft}
                    style={this.state.leftHover? {width: '15%'} : {width: '50%'} }
                >
                    <h1>CG Generalist</h1>
                    <a href="#" >LET'S GO</a>
                </div>
                <div className="sp-right"
                    onMouseEnter={this.onMouseEnterRight} onMouseLeave={this.onMouseLeaveRight}
                    style={this.state.rightHover? {width: '15%'} : {width: '50%'} }
                >
                    <h1>Designer/Developer</h1>
                    <a href="#" >LET'S GO</a>
                </div>
            </div>
        );
    }
}

export default SlidePage;
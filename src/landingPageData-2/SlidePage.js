import React, { Component } from 'react';
import './SlidePage.css';

class SlidePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leftWidth: '50%',
            rightWidth: '50%',
        }
    }

    onMouseEnterLeft = () => {
        this.setState({
            leftWidth: '85%',
            rightWidth: '15%',
        })
    }
    onMouseLeaveLeft = () => {
        this.setState({
            leftWidth: '50%',
            rightWidth: '50%',
        })
    }

    onMouseEnterRight = () => {
        this.setState({
            leftWidth: '15%',
            rightWidth: '85%',
        })
    }
    onMouseLeaveRight = () => {
        this.setState({
            leftWidth: '50%',
            rightWidth: '50%',
        })
    }

    render() {
        return (
            <div>
                <div className="sp-left"
                    onMouseEnter={this.onMouseEnterLeft} onMouseLeave={this.onMouseLeaveLeft}
                    style={{ width: this.state.leftWidth }}
                >
                    <h1>CG Generalist</h1>
                    <a href="#" >LET'S GO</a>
                </div>
                <div className="sp-right"
                    onMouseEnter={this.onMouseEnterRight} onMouseLeave={this.onMouseLeaveRight}
                    style={{ width: this.state.rightWidth }}
                >
                    <h1>Designer/Developer</h1>
                    <a href="#" >LET'S GO</a>
                </div>
            </div>
        );
    }
}

export default SlidePage;
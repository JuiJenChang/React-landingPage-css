import React, { Component } from 'react';
import './TravelJapan.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const data = [
    {
        placeName: 'Tokyo',
        image: 'https://source.unsplash.com/cddaZDt6uRw',
        introduction: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,from neon-lit skyscrapers to historic temples.'
    },
    {
        placeName: 'Osaka',
        image: 'https://source.unsplash.com/peYW3VwICpE',
        introduction: 'Osaka is a large port city and commercial center known for its modern architecture,nightlife and hearty street food.'
    },
    {
        placeName: 'kyoto',
        image: 'https://source.unsplash.com/Pz3EHf-KJfc',
        introduction: 'Kyoto is famous for its numerous classical Buddhist temples, gardens, imperial palaces,Shinto shrines and traditional wooden houses.'
    },
    {
        placeName: 'Hokkaido',
        image: 'https://source.unsplash.com/VmeOZQjTVGE',
        introduction: 'Hokkaido, the northernmost of Japan’s main islands, is known for its volcanoes,natural hot springs ("onsen") and ski areas.'
    },
]

class TravelJapan extends Component {
    constructor(props) {

        super(props)

        this.state = {
            data: data[0],
            count: 0,
        }
    }

    nextPage = () => {
        const count = this.state.count + 1;
        if (count < data.length) {
            this.setState({
                data: data[count],
                count: count,
            })
        }
        else {
            this.setState({
                data: data[0],
                count: 0,
            })
        }
    }

    previousPage = () => {
        const count = this.state.count + data.length -1;
        if(count < data.length){
            this.setState({
                data: data[count],
                count: count,
            })
        }
        else{
            const count = this.state.count -1;
            this.setState({
                data: data[count],
                count: count,
            })
        }
    }

    render() {
        return (
            <div>
                <div className="japan-logo" >
                    <p>Japan<span>.</span></p>
                </div>
                <div className="japan-menu" >
                    <ul className="japan-ul" >
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">DISCOVER</a></li>
                        <li><a href="#">PLAN YOUR TRIP</a></li>
                    </ul>
                </div>
                <div className="japan-h1" >
                    <h1>Explore<br />{this.state.data.placeName}</h1>
                </div>
                <img className="japan-img" src={this.state.data.image} />
                <p className="japan-introduction" >
                    {this.state.data.introduction}
                </p>
                <div className="japan-btn" >
                    <div className="japan-previous" onClick={this.previousPage} >
                        <IoIosArrowRoundBack />
                    </div>
                    <div className="japan-next" onClick={this.nextPage}  >
                        <IoIosArrowRoundForward />
                    </div>
                </div>
            </div>
        );
    }
}

export default TravelJapan;
import React, {Component} from 'react';
import {LondonMeetUp} from "./Components/LondonMeetUp";
import {NationalInsuranceApp} from "./Components/NationalInsuranceApp";
import {HashTagText} from "../../App/Components/HashTagText";

export class AndroidPage extends Component {

    backToTopId = "#AndroidTop";

    render() {
        return (
            <div className={"component-wrapper"} id="AndroidTop">
                <div className="page-block secondary-bg top-block">

                    <div className="flex-to-block-container">
                        <ul className="page-ul">
                            <li> <HashTagText href="#AndroidIntro" text="Introduction"/> </li>
                            <li> <HashTagText href="#LondonMeetUp" text="London Meetup App"/> </li>
                            <li> <HashTagText href="#NationalInsuranceCalc" text="National Insurance Calculator"/> </li>
                        </ul>
                    </div>
                </div>
                <div id="AndroidIntro" className="page-block">
                    <h3>Introduction</h3>
                    <p className="page-block-text">
                        The android app development was taught over two modules at uni. During this time we covered
                        coding with Android Studio, more coding with Java, using emulators, XML styling, permissions,
                        location services, SMS messaging, animations, using phone sensors and more. On this page you will
                        find apps that I created on these modules.
                    </p>
                    <a href={this.backToTopId}>Back to top</a>
                </div>
                <LondonMeetUp         backToTopId={this.backToTopId} className="page-block secondary-bg"/>
                <NationalInsuranceApp backToTopId={this.backToTopId} className="page-block"/>
            </div>
        )
    }

}
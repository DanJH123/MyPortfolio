import React, {Component} from 'react';
import {PageTools} from "../../../PageTools";
import MainMenuImg from "../../../../Images/AdvancedMSD/MainMenu.png"
import SendFriendReqImg from "../../../../Images/AdvancedMSD/SendFriendRequest.png"
import ReceiveFriendReqImg from "../../../../Images/AdvancedMSD/ReceiveFriendRequest.png"
import AcceptedFriendReq1Img from "../../../../Images/AdvancedMSD/AcceptedFriendRequest1.png"
import AcceptedFriendRequest2Img from "../../../../Images/AdvancedMSD/AcceptedFriendRequest2.png"
import AllThreeImg from "../../../../Images/AdvancedMSD/AllThree.png"
import BikePointInfoImg from "../../../../Images/AdvancedMSD/BikePointInfo.png"
import BikePointsImg from "../../../../Images/AdvancedMSD/BikePoints.png"
import BusNBikeImg from "../../../../Images/AdvancedMSD/BusNBike.png"
import BusStationInfoImg from "../../../../Images/AdvancedMSD/BusStationInfo.png"
import TubeStationInfoImg from "../../../../Images/AdvancedMSD/TubeStationInfo.png"
import ReceiveLocationImg from "../../../../Images/AdvancedMSD/ReceiveLocation.png"
import SendLocationImg from "../../../../Images/AdvancedMSD/SendLocation.png"



export class LondonMeetUp extends Component {

    render() {
        return (
            <div id="LondonMeetUp" className={this.props.className}>
                <h3>The London Meet Up App</h3>
                <p className="page-block-text">
                    Our assignment for this was to build an app that could use the TfL API to display transport information
                    in London. This included locations for bus stops, tube stations and bike points as well as the timetable
                    for arrivals and number of bikes. Users would need to be able to add/delete friends, send them a
                    meeting point or current location and be able to view these upon receiving them.<br/><br/>
                    Below shows the main menu and the functionality in the app that allows users to add friends. This
                    would be done in-app using SMS (as requested by the coursework leader) for the communication between
                    devices. All friend data was stored persistently.
                </p>
                <div className="image-row medium-image-row">
                    {PageTools.getMediumImgs(this.lmuFriendRequestImages, "London Meet Up App Screenshot")}
                </div>
                <p className="page-block-text">
                    <br/>
                    Below shows that users are able to enter their location and a distance radius and then view nearby
                    travel points by pressing submit. It shows the different toggles for which type of transport point
                    they were looking for in effect. It also shows the sending of their location and a meeting point.
                </p>
                <div className="image-row medium-image-row">
                    {PageTools.getMediumImgs(this.lmuTravelInfoImages, "London Meet Up App Screenshot")}
                </div>
                <a href={this.props.backToTopId}>Back to top</a>
            </div>
        )
    }

    lmuFriendRequestImages = [
        {
            img: MainMenuImg,
            description: "Main Menu, with values inputted for location and distance radius"
        },
        {
            img: SendFriendReqImg,
            description: "Bill is about to send his name to the phone at number 5554 (emulator port)"
        },
        {
            img: ReceiveFriendReqImg,
            description: "The request was received (by SMS) and is visible in the request table"
        },
        {
            img: AcceptedFriendReq1Img,
            description: "Ted accepted the request and an SMS was sent to Bill to ensure they are both added to each other's lists"
        },
        {
            img: AcceptedFriendRequest2Img,
            description: "Here you can see Ted's screen. Keeping the friend lists symmetric was a CW requirement"
        },
    ];

    lmuTravelInfoImages = [
        {
            img:SendLocationImg,
            description:""
        },
        {
            img:ReceiveLocationImg,
            description:""
        },
        {
            img:AllThreeImg,
            description:""
        },
        {
            img:BusNBikeImg,
            description:""
        },
        {
            img:BikePointsImg,
            description:""
        },
        {
            img:BusStationInfoImg,
            description:""
        },
        {
            img:BikePointInfoImg,
            description:""
        },
        {
            img:TubeStationInfoImg,
            description:""
        },
    ]

}
import React, { Component } from 'react';
import ioop1 from "../../../../Images/Ioop/Ioop1.PNG";
import ioop2 from "../../../../Images/Ioop/Ioop2.PNG";
import ioop3 from "../../../../Images/Ioop/Ioop3.PNG";
import {PageTools} from "../../../PageTools";

export class IOOPComponent extends Component {

    ioopCW1Images = [
        {
            img: ioop1,
            description: "User enters values for temperature and rainfall for each month."
        },
        {
            img: ioop2,
            description: "Once done, a menu is displayed to show options for visualising the entered data."
        },
        {
            img: ioop3,
            description: "Option '2' was entered into the console and so the entered data is displayed in a table format."
        }
    ];

    ioopCW2Images = {};

    render(){
        return (
            <div id="IOOP" className={this.props.className}>
                <h3>Introduction to Object Oriented Programming</h3>
                <h4> CW1 </h4>
                <p className="page-block-text">
                    The coursework for this module involved implementing and testing a program to store and analyse
                    temperature and rainfall data for a year (12 months). The user would input the values on a console
                    interface and an operation would then be performed. This was my first Java assignment and it was
                    mostly about getting to grips with Java's syntax. It was all coded within one class and code
                    reusability was not good. I scored 80% on this assignment but that's only because we weren't
                    expected to apply OOP at this point!
                    <br/><br/>Below is a short demo of how this program worked.
                </p>
                <div className="image-row small-image-row">
                    {PageTools.getSmallImgs(this.ioopCW1Images, "IOOP CW1 Screenshot")}
                </div>
                <h4> CW2 </h4>
                <p className="page-block-text">
                    Our final coursework for this project was completed in 2 parts. We had to develop and implement
                    a set of classes that represent geometrical shapes. There would be a GUI that displayed these
                    shapes, which was provided to us, and a console interface that would allow user input, which we
                    would develop.
                    <br/><br/>The console application had to load a set of shapes from a text	 file, add shapes,
                    calculate areas and perimeters, move and modify the shapes	and	save them again	in the text	file.
                    The GUI will load the shapes from the text	files to create	the	image and display it.
                </p>
                <div className="image-row small-image-row">
                    {PageTools.getSmallImgs(this.ioopCW2Images, "IOOP CW2 Screenshot")}
                </div>
                <a href={this.props.backToTopId}>Back to top</a>
            </div>
        )
    }

}
import React, { Component } from 'react';

import {IOOPComponent} from "./Components/IOOPComponent";
import {AOOPComponent} from "./Components/AOOPComponent";
import {DSComponent} from "./Components/DSComponent";
import {FOOPComponent} from "./Components/FOOPComponent";
import {HashTagText} from "../../App/Components/HashTagText";

export class JavaPage extends Component {

    backToTopId = "#JavaTop";

    render(){
        return (
            <div className={"component-wrapper"} id="JavaTop">
                <div className="page-block secondary-bg top-block">
                    <div className="flex-to-block-container">
                        <ul className="page-ul">
                            <li> <HashTagText href="#JavaIntro" text="Introduction"/> </li>
                            <li> <HashTagText href="#AOOP" text="Advanced Object-Oriented Programming"/> </li>
                            <li> <HashTagText href="#DS" text="Data Structures"/> </li>
                            <li> <HashTagText href="#FOOP" text="Further Object-Oriented Programming"/> </li>
                            <li> <HashTagText href="#IOOP" text="Introduction to Object-Oriented Programming"/> </li>
                        </ul>
                    </div>
                </div>
                <div id="JavaIntro" className="page-block">
                    <h3>Introduction</h3>
                    <p className="page-block-text">
                        Overall, I completed four Java/Object-Oriented Programming modules (this does not include
                        Android programming). I have descriptions of the work I did in each one along with the grades I
                        received. Use the contents above to skip to a section.
                    </p>
                    <a href={this.backToTopId}>Back to top</a>
                </div>
                <div>
                <AOOPComponent backToTopId={this.backToTopId} className="page-block secondary-bg"/>
                <DSComponent   backToTopId={this.backToTopId} className="page-block"/>
                <FOOPComponent backToTopId={this.backToTopId} className="page-block secondary-bg"/>
                <IOOPComponent backToTopId={this.backToTopId} className="page-block"/>
                </div>
            </div>
        )
    }

}



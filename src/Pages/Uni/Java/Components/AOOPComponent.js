import React, {Component} from 'react';
import {PageTools} from "../../../PageTools";

export class AOOPComponent extends Component {

    aoopCWImages = {};

    render() {
        return (
            <div id="AOOP" className={this.props.className}>
                <h3>Advanced Object Oriented Programming</h3>
                <h4> The Module... </h4>
                <p className="page-block-text">
                    The ultimate module in the Java/OOP series where we were expected to bring together
                    everything we had learned since the first year to complete it with the highest possible grade.
                    <br/>It consisted largely of design patterns, however we touched on UML, Java 5/6/7/8, C#,
                    design by contract and JUnit testing.
                    <br/>The module was 50% coursework and 50% exam. I scored 85% overall.
                </p>
                <h4> The Coursework... </h4>
                <p className="page-block-text">
                    Ever thought of building a tool for Jeremy Paxman to use to manage the scores and load questions
                    when hosting a game of University Challenge? Well this is what we had to develop for our coursework.
                    We had to use all of our knowledge of OOP and Java to develop a UI that could do just this.
                </p>
                <div className="image-row small-image-row">
                    {PageTools.getSmallImgs(this.aoopCWImages, "AOOP CW Screenshot")}
                </div>
                <a href={this.props.backToTopId}>Back to top</a>
            </div>
        )
    }

}
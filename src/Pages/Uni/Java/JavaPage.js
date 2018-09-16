import React, { Component } from 'react';

export class JavaPage extends Component {

    render(){
        return (
            <div className={"component-wrapper"}>
                <div className="page-block secondary-accent-lighter-bg">
                    <h3>Page Contents...</h3>
                    <div className="flex-to-block-container">
                        <ul className="page-ul">
                            <li> <a href="#JavaIntro">Introduction</a> </li>
                            <li> <a href="#IOOP">Introduction to Object-Oriented Programming</a> </li>
                            <li> <a href="#FOOP">Further Object-Oriented Programming</a> </li>
                            <li> <a href="#DS">Data Structures</a> </li>
                            <li> <a href="#AOOP">Advanced Object-Oriented Programming</a> </li>
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
                </div>
                <div id="IOOP" className="page-block secondary-bg">
                    <h3>Introduction to Object Oriented Programming</h3>
                </div>
                <div id="FOOP" className="page-block secondary-accent-lighter-bg">
                    <h3>Further Object Oriented Programming</h3>
                </div>
                <div id="DS" className="page-block">
                    <h3>Data Structures</h3>
                </div>
                <div id="AOOP" className="page-block secondary-bg">
                    <h3>Advanced Object Oriented Programming</h3>
                </div>
            </div>
        )
    }

}
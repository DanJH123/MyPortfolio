import React, { Component } from 'react';
import logo from '../../Icons/logo.svg';

export class HomePage extends Component {

    render(){
        return (
            <div className={"component-wrapper"}>
                <div className="page-block secondary-bg top-block">
                    <h3>Welcome to my Technology Portfolio!</h3>
                    <p className="page-block-text">
                        This is a website dedicated to showcasing all the work I have done since I began studying technology
                        in 2013 at Abingdon College. Select the menu icon in the top-right to navigate through the site.
                    </p>
                </div>
                <div className="page-block">
                    <h3>This Site...</h3>
                    <div className="flex-to-block-container">
                        <p className="page-block-text">
                            I wanted to build my portfolio in the form of a website as a showcase of my skills and affection
                            for frontend development. This site is powered by ReactJS and I chose this after building
                            an app with React Native and a website with ReactJS for my computing project. I aimed to use
                            my experience and knowledge in web design to make this site easy to use, stylish and responsive.
                        </p>
                        <div className="page-block-img-container">
                            <img src={logo} className="react-logo react-logo-spin" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="page-block secondary-bg">
                    <h3>My Coding experience...</h3>
                    <p className="page-block-text">
                        Throughout my five+ years of computing, I have touched on a fair amount of
                        coding languages. University consisted mostly of Object-Oriented Programming with Java but I
                        also used C++ and Python along with HTML, CSS & JavaScript. We touched on C# and spent a small
                        amount of time using the command line. I discovered React as my favourite programming
                        language/framework during my computing project and worked on an AngularJS powered website for
                        3 months during an internship with Oodle Finance.
                    </p>
                </div>
            </div>
        );
    }

}
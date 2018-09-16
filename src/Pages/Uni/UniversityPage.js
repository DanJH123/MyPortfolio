import React, { Component } from 'react';
import OBULogo from '../../Images/OBULogo.svg'
import UniCertificate from '../../Images/uni-certificate.jpg'
export class UniversityPage extends Component {

    render(){
        return (
            <div className={"component-wrapper"}>
                <div className="page-block secondary-accent-lighter-bg">
                    <h3>Oxford Brookes University</h3>
                    <div className="flex-to-block-container">
                        <p className="page-block-text">
                            After completing an Extended Diploma in IT at Abingdon College, I went to Oxford
                            Brookes to learn more about the world of computing and refine my career direction.
                        </p>
                        <div className="page-block-img-container">
                            <img src={OBULogo} alt="Oxford Brookes Logo"/>
                        </div>
                    </div>
                </div>
                <div className="page-block">
                    <h3>First Class Degree in Computer Science...</h3>
                    <div className="block-container">
                        <p className="page-block-text">
                            I found what I was looking for at Brookes. A bundle of knowledge and a better career-direction.
                            I quickly figured out that I wanted to be a software developer so I went on to smash the
                            programming modules and get a First-Class degree. I was particularly strong with the Java
                            and android app development modules.
                        </p>
                        <div className="page-block-img-container">
                            <img src={UniCertificate} alt={"University Certificate"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
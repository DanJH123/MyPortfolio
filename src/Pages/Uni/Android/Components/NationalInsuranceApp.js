import React, {Component} from 'react';

export class NationalInsuranceApp extends Component {

    render() {
        return (
            <div id="NationalInsuranceCalc" className={this.props.className}>
                <h3>The National Insurance Calculator App</h3>
                <h4>  </h4>
                <p className="page-block-text">

                </p>
                <a href={this.props.backToTopId}>Back to top</a>
            </div>
        )
    }

}
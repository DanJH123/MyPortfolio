import React, {Component} from 'react';

export class FOOPComponent extends Component {

    render() {
        return (
            <div id="FOOP" className={this.props.className}>
                <h3>Further Object Oriented Programming</h3>
                <a href={this.props.backToTopId}>Back to top</a>
            </div>
        )
    }

}
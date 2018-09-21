import React, {Component} from 'react';

export class DSComponent extends Component {

    render() {
        return (
            <div id="DS" className={this.props.className}>
                <h3>Data Structures</h3>
                <a href={this.props.backToTopId}>Back to top</a>
            </div>
        )
    }

}
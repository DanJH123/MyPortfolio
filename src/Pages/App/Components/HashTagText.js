import React, {Component} from 'react';

export class HashTagText extends Component {

    render() {
        return (
            <a href={this.props.href}>{"# "+this.props.text}</a>
        )
    }

}
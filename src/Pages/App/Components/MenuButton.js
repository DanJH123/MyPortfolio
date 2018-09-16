import React, { Component } from 'react';
import {Glyphicon} from "react-bootstrap";
import $ from "jquery";

export class MenuButton extends Component {

    constructor() {
        super();
        this.handleMouseOp = this.handleMouseOp.bind(this);
    }


    render() {
        return (
            <div className={this.props.className}
                 onClick={ ()=> this.handleMouseOp() }>
                <Glyphicon glyph="align-justify"/>
            </div>
        )
    }

    handleMouseOp(){
        this.rotateMenuIcon();
        this.props.toggleMenu();
    }

    rotateMenuIcon() {
        let iconClass = $(".glyphicon.glyphicon-align-justify");
        iconClass.hasClass("rotate180")
            ? iconClass.removeClass("rotate180")
            : iconClass.addClass("rotate180");
    }

}
import React, { Component } from 'react';
import {Glyphicon} from "react-bootstrap";
import $ from "jquery";

export class MenuButton extends Component {

    render() {
        return (
            <div className={this.props.className}
                 onClick={()=>{
                     this.rotateMenuIcon();
                     this.props.toggleMenu();}}>
                <Glyphicon glyph="align-justify"/>
            </div>
        )
    }

    rotateMenuIcon() {
        let iconClass = $(".glyphicon.glyphicon-align-justify");
        iconClass.hasClass("rotate180")
            ? iconClass.removeClass("rotate180")
            : iconClass.addClass("rotate180");
    }

}
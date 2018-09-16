import React,{Component} from "react";
import _ from 'lodash';
import App from "../App";


export class NavigationMenu extends Component {

    menuItems = require("../../../Data/MenuItems");

    render() {
        return (
            <aside id={this.props.id} className="App-menu-container close-nav-menu" >
                {this.getMenuItems(this.menuItems.MenuItems)}
            </aside>
        )
    }

    getMenuItems(menuItems){
        if(menuItems !== undefined && menuItems.length !== 0) {
            return _.map(menuItems, (item, key) => {
                return <div className="app-menu-item-container" key={key}>
                    <p className={"menu-item " + this.getItemClass(item.name)}
                       onClick={()=>{this.props.onClick(item)}}>
                        {App.applyUnderscores(item.name)}
                    </p>
                    {this.getSubItems(item.subItems)}
                </div>
            });
        }
    }


    getSubItems(subItems) {
        if(subItems !== undefined && subItems.length !== 0) {
            return _.map(subItems, (item, key) => {
                return <p className={"menu-sub-item " + this.getItemClass(item.name)}
                          onClick={()=>{this.props.onClick(item)}}
                          key={key}>
                        {App.applyUnderscores(item.name)}
                    </p>
            });
        }
    }

    getItemClass(name) {
        return (name === this.props.currentPageObject.name) ? "selected-menu-item" : "";
    }

}

import React, { Component } from 'react';
import {MenuButton} from "./Components/MenuButton";
import {NavigationMenu} from "./Components/NavigationMenu";
import $ from "jquery";
import './Styles/App.css';

class App extends Component {

    constructor(){
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.switchPage = this.switchPage.bind(this);
        this.state={
            currentPage: "Home"
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MenuButton toggleMenu={this.toggleMenu} className="App-bar-item App-menu-icon"/>
                    <h1  className="App-bar-item App-title">{App.applyUnderscores("My Portfolio")}</h1>
                    <div className="App-bar-item"/>
                </header>
                <NavigationMenu id="open-nav-menu" currentPage={this.state.currentPage} switchPage={this.switchPage}/>
                <footer className="footer">
                    <p>{App.applyUnderscores("Daniel James Hignell")}</p>
                    <p>{App.applyUnderscores("Technology Portfolio")}</p>
                </footer>
            </div>
        );
    }

    static applyUnderscores(text){
        return text.split(' ').join('_');
    }

    switchPage(pageName){
        this.setState({ currentPage:pageName })
    }

    toggleMenu(){
        let navMenu = $("#open-nav-menu");
        navMenu.toggleClass("close-nav-menu");
    }
}

export default App;

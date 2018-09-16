import React, { Component } from 'react';
import {MenuButton} from "./Components/MenuButton";
import {NavigationMenu} from "./Components/NavigationMenu";
import {PageContent} from "../PageContent";
import $ from "jquery";
import '../../Styles/App.css';
import '../../Styles/NavDrawer.css';
import '../../Styles/PageStyles.css';
import '../../Styles/Scrollbar.css';

class App extends Component {

    startPage = {
        name: "Java",
        pageKey: "java",
    };

    constructor(){
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.switchPage = this.switchPage.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.contentContainerRef = React.createRef();

        this.state={
            currentPageObject: this.startPage
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
                <div className="main-content-container" ref={this.contentContainerRef}>
                    <NavigationMenu id="open-nav-menu"
                                    currentPageObject={this.state.currentPageObject}
                                    onClick={this.switchPage}
                                    toggleMenu={this.toggleMenu}/>
                    <PageContent className="content-container" closeMenu={this.closeMenu} page={this.state.currentPageObject}/>
                </div>
                <footer className="footer">
                    <p>{App.applyUnderscores("Daniel James Hignell")}</p>
                    <p>{App.applyUnderscores("Technology Portfolio")}</p>
                </footer>
            </div>
        );
    }

    static scrollToRef(ref){
        // ReactDOM.findDOMNode(ref.current).scrollIntoView();
        window.scrollTo(0, ref.offsetTop)
    }

    static applyUnderscores(text){
        return text.split(' ').join('_');
    }

    switchPage(pageObject){
        this.setState({ currentPageObject:pageObject });
        this.toggleMenu();
        App.scrollToRef(this.contentContainerRef);
    }

    closeMenu() {
        let navMenu = $("#open-nav-menu");
        if(!navMenu.hasClass("App-menu-container close-nav-menu")){
            this.toggleMenu();
        }
    }

    toggleMenu(){
        let navMenu = $("#open-nav-menu");
        navMenu.toggleClass("close-nav-menu");
    }
}

export default App;

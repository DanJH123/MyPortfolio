import React, { Component } from 'react';
import {HomePage}       from "./Home/HomePage.js";
import {UniversityPage} from "./Uni/UniversityPage.js";
import {JavaPage} from "./Uni/Java/JavaPage";

export class PageContent extends Component {

    render(){

        return (
            <div className={this.props.className} onClick={()=>this.props.closeMenu()}>
                <h1 className={"content-title"}>{this.props.page.name}</h1>
                {this.pages[this.props.page.pageKey]}
            </div>
        );
    }

    pages = {
        "home":                 <HomePage pageObject={this.props.page}/>,
        "university":           <UniversityPage pageObject={this.props.page}/>,
        "java":                 <JavaPage pageObject={this.props.page}/>,
        "android": "TBC"        /*(<AndroidPage pageObject={this.props.page}/>)*/,
        "web": "TBC"            /*(<WebPage pageObject={this.props.page}/>)*/,
        "cPP": "TBC"            /*(<CPPPage pageObject={this.props.page}/>)*/,
        "python": "TBC"         /*(<PythonPage pageObject={this.props.page}/>)*/,
        "uOther": "TBC"         /*(<UOtherPage pageObject={this.props.page}/>)*/,
        "dissertation": "TBC"   /*(<DissertationPage pageObject={this.props.page}/>)*/,
        "dFrontend": "TBC"      /*(<DFrontendPage pageObject={this.props.page}/>)*/,
        "dBackend": "TBC"       /*(<DBackendPage pageObject={this.props.page}/>)*/,
        "database": "TBC"       /*(<DatabasePage pageObject={this.props.page}/>)*/,
        "gitHub": "TBC"         /*(<GitHubPage pageObject={this.props.page}/>)*/,
        "commandLine": "TBC"    /*(<CommandLinePage pageObject={this.props.page}/>)*/,
        "oodleFinance": "TBC"   /*(<OodleFinancePage pageObject={this.props.page}/>)*/,
        "oFrontend": "TBC"      /*(<OFrontendPage pageObject={this.props.page}/>)*/,
        "oBackend": "TBC"       /*(<OBackendPage pageObject={this.props.page}/>)*/,
        "oOther": "TBC"         /*(<OOtherPage pageObject={this.props.page}/>)*/,
        "hackathon": "TBC"      /*(<HackathonPage pageObject={this.props.page}/>)*/,
        "pCBuilding": "TBC"     /*(<PCBuildingPage pageObject={this.props.page}/>)*/,
        "phoneRepair": "TBC"    /*(<PhoneRepairPage pageObject={this.props.page}/>)*/,
    }

}

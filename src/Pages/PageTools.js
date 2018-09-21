import React, {Component} from 'react';
import _ from "lodash";

export class PageTools extends Component {

    static getSmallImgs(imageObjectList, altText) {
        if(_.isEmpty(imageObjectList)){
            return (
                <p className="no-images">
                    Images have not been uploaded yet
                </p>
            )
        }
        return _.map(imageObjectList, (img, key)=>{
            return (
                <div key={key} className="image-row-container image-row-container-small">
                    <div className="image-row-item">
                        <img className="image-small" src={img.img} alt={altText}/>
                        <p>{img.description}</p>
                    </div>
                </div>
            )
        })
    }

    static getMediumImgs(imageObjectList, altText) {
        if(_.isEmpty(imageObjectList)){
            return (
                <p className="no-images">
                    Images have not been uploaded yet
                </p>
            )
        }
        return _.map(imageObjectList, (img, key)=>{
            return (
                <div key={key} className="image-row-container image-row-container-medium">
                    <div className="image-row-item">
                        <img className="image-medium" src={img.img} alt={altText}/>
                        <p>{img.description}</p>
                    </div>
                </div>
            )
        })
    }

}
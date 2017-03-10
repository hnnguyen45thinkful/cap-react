import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome to Martial Arts: Decision Making',
            text: 'This is a survey application to determine which Martial Arts is a perfect fit for you.',
            buttonText: 'Start your Journey and Destiny into Martial Arts' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    

}

export default Popup

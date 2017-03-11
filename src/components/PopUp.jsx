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
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            
            this.props.startQuiz();
        } else {            
            location.reload();// restart the application
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the Martial Arts Survey to best fit you. <br /> You got a score of: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> which means the best fit for you is...'
        })
    }
}
export default Popup;

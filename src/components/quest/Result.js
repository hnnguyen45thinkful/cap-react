import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            for(const i=0; i<answer.scores.length; i++) {
                this.state.arts[i].score += answer.scores[i];
            }
        let points = this.props.score / this.props.questions.length * 100;
        let message = '';

        if (points > 80) {
            message = '';
        } else if (percent < 80 && percent > 60) {
            message = '';
        } else {
            message = '';
        }

    // render() {
    //     let percent = this.props.score
    //     // / this.props.questions.length * 100;
    //     let message = '';

    //     // if (percent > 80) {
    //     //     message = '';
    //     // } else if (percent < 80 && percent > 60) {
    //     //     message = '';
    //     // } else {
    //     //     message = '';
    //     // }

    //                                 /*

    //                         for(var i=0;i<answer.scores.length;i++){
    //                             this.state.arts[i].score += answer.scores[i];
    //                         }
    //                         */
            

        return (
            <div className="well">
                <p>You got {this.props.score} out of {this.props.questions.length} correct.</p>
                <h1>{percent}% - {message}</h1>
                <hr/>
                <a href="/">Try again</a>
            </div>
        )
    }
}

export default Result;
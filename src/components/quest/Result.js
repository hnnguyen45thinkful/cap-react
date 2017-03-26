import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        arr.sort(function(a, b){
        const keyA = new 
        const keyB = new Date(b.updated_at);

    if(keyA < keyB) 
        return 0;
        message = ''
    if(keyA > keyB) 
        return 1;
    
    return 0;
});
        //    const arts = ;
            for(const i=0; i<answer.scores.length; i++) {
                this.state.arts[i].score += answer.scores[i];
                return i;
            }
        let points = this.props.score
        let message = '';//Blank Message for each point system.

        if (points > ) {
            message = '';
        } else if (points < ) {
            message = '';
        } else {
            message = '';
        }

    // render() {
    //     let point = this.props.score
    //     let message = '';

    //     // if ( >) {
    //     //     message = '';
    //     // } else if ( &&) {
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
                <p>You got a score of {this.props.score} from the {this.props.questions.length} questions.</p>
                <h1>{points} - {message}</h1>
                <hr/>
                <a href="/">Try again for another decision-making!!!</a>
            </div>
        )
    }
}

export default Result;
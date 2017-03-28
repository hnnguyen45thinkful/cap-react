import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        /*arr.sort(function(a, b){
            const A = new Arts(a)
            const B = new Arts(b)

            if(A < B) 
                return 0;
                message = ''
            if(A > B) 
                return 1;

            return 0;
        }
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
            let points,message;

            let arts = this.props.arts;
            arts.sort(function(a,b){
                if(a.score > b.score) return -1;
                if(a.score < b.score) return 1;
                return 0;
            });

        return (
            <div className="well">
                <p>We have selected the perfect Marital Art based on your answers.</p>
                <h1>{arts[0].title} - with a score of {arts[0].score}</h1>
                <hr/>
                <a href="/">Try again for another decision-making!!!</a>
            </div>
        )
    }
}

export default Result;
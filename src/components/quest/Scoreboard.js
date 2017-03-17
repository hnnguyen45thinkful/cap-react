import React, {Component} from 'react';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="well">
                <h3>Question {this.props.currentQuestion} out of {this.props.questions.length}
                    <span className="pull-right"><strong>Score: {this.props.score}</strong></span></h3>
            </div>
        )
    }
}

export default Scoreboard;
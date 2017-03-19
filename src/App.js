import React, { Component } from 'react';
import QuestionList from './components/quest/QuestionList';
import Scoreboard from './components/quest/Scoreboard';
import Result from './components/quest/Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Martial Art : Decision Making</h2>
        </div>
        <p className="App-intro">
        Interested in starting Martial Arts? Don't know which discipline to study or start! 
        Then you come to the right place to evaluate and decide which is a perfect fit for you.</p>
      </div>
    );
  }
  constructor(props) {
        super(props);

        this.state = {
            questions: [
                {
                    id: 1,
                    text: '',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: ''
                        },
                        {
                            id: 'b',
                            text: ''
                        },
                        {
                            id: 'c',
                            text: ''
                        }
                    ],
                    
                },
                {
                    id: 2,
                    text: '',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: ''
                        },
                        {
                            id: 'b',
                            text: ''
                        },
                        {
                            id: 'c',
                            text: ''
                        }
                    ],
                    
                },
                {
                    id: 3,
                    text: '',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: ''
                        },
                        {
                            id: 'b',
                            text: ''
                        },
                        {
                            id: 'c',
                            text: ''
                        }
                    ],
                    
                },
                {
                    id: 4,
                    text: '',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: ''
                        },
                        {
                            id: 'b',
                            text: ''
                        },
                        {
                            id: 'c',
                            text: 'Schemas'
                        }
                    ],
                    
                }
            ],
            score: 0,
            currentQuestion: 1
        };

        this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
        this.setScore = this.setScore.bind(this);

    }

    setCurrentQuestion(currentQuestion) {
        this.setState({currentQuestion: currentQuestion});
    }

    setScore(score) {
        this.setState({score: score});
    }

    render() {
        let scoreboard,
            result;

        if (this.state.currentQuestion > this.state.questions.length) {
            scoreboard = '';
            result = <Result {...this.state}/>;
        } else {
            scoreboard = <Scoreboard {...this.state }/>;
            result = '';
        }

        return (
            <div className="col-md-6">
                <h1 className="decision-heading">Martial Arts Decision</h1>
                {scoreboard}
                <QuestionList
                    {...this.state}
                    setCurrentQuestion={this.setCurrentQuestion}
                    setScore={this.setScore}
                />
                {result}

            </div>
        );
    }
}
    

export default App;

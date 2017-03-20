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
            arts : [
                {title:"Karate",score:0},"Mixed Martial Arts","Tae Kwon Do","Jiu-Jitsu", "Judo", "Kendo" ,"Kickboxing/Thai Boxing"
            ],

            questions: [
                {
                    id: 1,
                    text: 'Do you prefer to strike and stand-up (punch and/or kick)?',
                    possibleAnswers: [
                        {
                            
                            text: 'yes',
                            '0': 1,
                            '1': 1,
                            '2': 0,
                            '3': 1
                        },
                        {
                            id: 'b',
                            text: 'no',
                            '0': 0,
                            '1': 0,
                            '2': 1,
                            '3': 0
                        },
                        {
                            id: 'c',
                            text: ''
                        }
                    ],
                    
                },
                {
                    id: 2,
                    text: 'Do you feel comfortable doing grappling, submissions, or throwing your opponent ? ',
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
                    text: 'Are you okay using weapons, foreign objects, or any sharp weapons for hand to hand combat sparring ? ',
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
                    text: 'Do you like to compete in tournaments or olympics in the future? ',
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
                    
                },
                {
                    id: 5,
                    text: 'Would you like to learn how to break wooden boards, bricks, stones, etc. ? ',
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
            <div className="col-md-6 col-md-offset-3">
                <h1 className="decision-heading">Martial Art : Decision Making</h1>
            <p className="App-intro">
        Interested in starting Martial Arts? Don't know which discipline to study or start! 
        Then you come to the right place to evaluate and decide which is a perfect fit for you.</p>
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

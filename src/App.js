import {Component} from 'react'
import './App.css'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  ChoiceImg,
  ListItem,
  ImgButton,
  RulesImg,
  RulesBtn,
  PlayBtn,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    selectedChoice: '',
    randomNum: '',
    result: '',
    clicked: false,
  }

  onClickRock = () => {
    const num = Math.floor(Math.random() * 3)
    this.setState({selectedChoice: choicesList[0], randomNum: num})
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
    if (choicesList[num].id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choicesList[num].id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  onClickScissors = () => {
    const num = Math.floor(Math.random() * 3)
    this.setState({selectedChoice: choicesList[1], randomNum: num})
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
    if (choicesList[num].id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[num].id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  onClickPaper = () => {
    const num = Math.floor(Math.random() * 3)
    this.setState({selectedChoice: choicesList[2], randomNum: num})
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
    if (choicesList[num].id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choicesList[num].id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  renderGameView = () => (
    <>
      <ul className="ul-container">
        <ListItem>
          <ImgButton type="button" data-testid="rockButton">
            <ChoiceImg
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              onClick={this.onClickRock}
            />
          </ImgButton>
        </ListItem>
        <ListItem>
          <ImgButton type="button" data-testid="scissorsButton">
            <ChoiceImg
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              onClick={this.onClickScissors}
            />
          </ImgButton>
        </ListItem>
        <ListItem>
          <ImgButton type="button" data-testid="paperButton">
            <ChoiceImg
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              onClick={this.onClickPaper}
            />
          </ImgButton>
        </ListItem>
      </ul>
    </>
  )

  playAgain = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
  }

  GameResultView = () => {
    const {selectedChoice, randomNum, result} = this.state
    return (
      <>
        <div className="flexc">
          <div className="flex">
            <div className="flexc">
              <p className="p">YOU</p>
              <ChoiceImg src={selectedChoice.imageUrl} alt="your choice" />
            </div>
            <div className="flexc">
              <p className="p">OPPONENT</p>
              <ChoiceImg
                src={choicesList[randomNum].imageUrl}
                alt="opponent choice"
              />
            </div>
          </div>
          <div className="flexc">
            <p className="rp">{result}</p>
            <PlayBtn type="button" onClick={this.playAgain}>
              PLAY AGAIN
            </PlayBtn>
          </div>
        </div>
      </>
    )
  }

  render() {
    const {score, clicked} = this.state
    console.log(clicked)
    return (
      <div className="bg-container">
        <div className="top">
          <h1>
            ROCK <br /> PAPER <br /> SCISSORS
          </h1>
          <p className="score">
            Score <br /> {score}
          </p>
        </div>
        {clicked ? this.GameResultView() : this.renderGameView()}
        <>
          <Popup
            modal
            trigger={<RulesBtn type="button">Rules</RulesBtn>}
            className="popup-content"
          >
            {close => (
              <div>
                <button
                  type="button"
                  className="close-bt"
                  onClick={() => close()}
                >
                  <RiCloseLine size={20} />
                </button>
                <div>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            )}
          </Popup>
        </>
      </div>
    )
  }
}

export default App

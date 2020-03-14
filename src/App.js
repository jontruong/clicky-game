import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends Component {

  shuffleArray = (a) => {
    var j, x, i;
    for (i= a.length-1; i > 0; i--) {
     j = Math.floor(Math.random() * (i+1));
      x= a[i];
      a[i] = a[j];
      a[j] = x 
    }
    return a;
  }

  state = {
    characters,
    score:0,
    topScore: 0,
    clickedChars: [],
    message: "",
    showWins: 0,
    showLoss: 0
  };

  handleClicked = id => {
    //Assigning the state to an empty array that will be updated
    let clickedChars = this.state.clickedChars;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showLoss: 0
    });
    
    if(clickedChars.indexOf(id) === -1){
      clickedChars.push(id);
      console.log(clickedChars);
      this.handleIncrement();
      this.shuffle();
    } else if (this.state.score === 12) {
      //alert player wins
      this.setState({
        showWins: 1,
        score:0,
        clickedChars: []
      });
    } else {
      this.setState({
        showLoss: 1,
        score:0,
        clickedChars: []
      });
      console.log("duplicate");
      this.setState({showLoss: 1})
    }

    if(score > topScore) {
      this.setState({
        topScore:score
      });
    };

  }

  shuffle = () => {
    this.setState({characters: this.shuffleArray(characters)})
  }


  handleIncrement = () => {
    this.setState({score:this.state.score +1});
  }

  
  render() {
    return (
      <div className = "container">
        <div className = "alert alert-danger" style={{ opacity: this.state.showLoss}}>
          You clicked on this already, try again.
        </div>
        <div className = "alert alert-success" style = {{ opacity: this.state.showWins}}>
          Awesome! You didn't click on any duplicates!
        </div>
        <Score title="The Clicky Game" topScore={this.state.topScore} score={this.state.score}></Score>
      <Wrapper>
        {this.state.characters.map(characters => (
          <CharCard
            id={characters.id}
            key={characters.id}
            image={characters.image}
            handleClicked={this.handleClicked}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

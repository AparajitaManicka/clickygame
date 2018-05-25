import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar'
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  state = {
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
      friends: friends,
      unselectedFriends: friends
  }

  componentDidMount() {
    
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }


  
  selectFriend = id => {
    const findFriend = this.state.unselectedFriends.find(item => item.id === id);

    if(findFriend === undefined) {
        // failure to select a new dog
        this.setState({ 
            message: "You guessed incorrectly!",
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            curScore: 0,
            friends: friends,
            unselectedFriends: friends
        });
    }
    else {
        // success to select a new dog
        const newFriends = this.state.unselectedFriends.filter(item => item.id !== id);
        
        this.setState({ 
            message: "You guessed correctly!",
            curScore: this.state.curScore + 1,
            friends: friends,
            unselectedFriends: newFriends
        });
    }

    this.shuffleArray(friends);
};



  

    
    
  render() {
    return (
        <Wrapper>
            <Navbar
                message={this.state.message}
                curScore={this.state.curScore}
                topScore={this.state.topScore}
            />
            <Title />
            {
                this.state.friends.map(friend => (
                    <FriendCard
                        id={friend.id}
                        image={friend.image}
                        selectFriend={this.selectFriend} 
                        curScore={this.state.curScore}
                    />
                ))
            }
        </Wrapper>
    );
}
  }

export default App;

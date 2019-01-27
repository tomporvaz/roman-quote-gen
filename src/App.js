import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Carpe diem",
      translation: "Seize the day",
      author: "Horace"
    };
    //add bindings here
  }

  render() {
    const tweetHREF = "https://twitter.com/intent/tweet?button_hashtag=romanquotes&text=" + 
    encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);
    
    const testHREF = "https://www.google.com/";
    
    return (
      <div>
        <h1 className="header"> Random Quote Generator </h1>
        <div id="quote-box">
          <h3 id="text">{this.state.quote}</h3>
          <p id="translation">{this.state.translation}</p>
          <p id="author">~{this.state.author}</p>
          <a  id="tweet-quote" href={tweetHREF} target="_blank">
            <button >Tweet Quote</button>
          </a>
          
          <button id="new-quote" onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

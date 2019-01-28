import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const quotesJSON = {quotes:[
  {
    quote: "Carpe Diem",
    translation: "Seize the day.",
    author: "Horace"
  },
  {
    quote: "Tempest Fugit",
    translation: "Time flies.",
    author: "Virgil"
  },
  {
    quote: "SEMPER UBI SUB UBI",
    translation: "Always where under where.",
    author: "Mr. Talone"
  }


]}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteObj: quotesJSON.quotes[0],
      //quote: quoteObj.quote,
      translation: "Seize the day",
      author: "Horace"
    };
    //add bindings here
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const tweetHREF = "https://twitter.com/intent/tweet?button_hashtag=romanquotes&text=" + 
    encodeURIComponent('"' + this.state.quoteObj.quote + '" ' + '(' + this.state.quoteObj.translation + ') ~ ' + this.state.author);
    
    const testHREF = "https://www.google.com/";
    
    return (
      <div>
        <h1 className="header"> Roman Quote Generator </h1>
        <div id="quote-box">
          <h3 id="text">{this.state.quoteObj.quote}</h3>
          <p id="translation">{this.state.quoteObj.translation}</p>
          <p id="author">~{this.state.quoteObj.author}</p>
          <a  id="tweet-quote" href={tweetHREF} target="_blank">
            <button onClick={this.handleClick}>Tweet Quote</button>
          </a>
          
          <button id="new-quote" onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

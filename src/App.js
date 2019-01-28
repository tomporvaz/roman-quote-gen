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
    quote: "Semper Ubi Sub Ubi",
    translation: "Always where under where.",
    author: "Mr. Talone"
  },
  {
    quote: "In Vino Veritas",
    translation: "There is truth in wine.",
    author: "Pliny",
  },
  {
    quote: "Male Parta Male Dilabuntur",
    translation: "What has been wrongly gained is wrongly lost.",
    author: "Virgil"
  },
  {
    quote: "Omnium Rerum Principia Parva Sunt",
    translation: "The beginning of all things are small.",
    author: "Cicero"
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
    this.handleClick = this.handleClick.bind(this);
  }

  //functions/methods, whatever you want to call them.  They handle logic
  handleClick() {
    const randomIndex = Math.floor(Math.random() * quotesJSON.quotes.length);
    console.log(randomIndex);
    this.setState({
      quoteObj: quotesJSON.quotes[randomIndex]
    });
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

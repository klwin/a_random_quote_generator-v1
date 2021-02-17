/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quoteOne = {
  quote: "Be yourself; everyone else is already taken",
  source: "Oscar Wilde",
  citation: "The Hudson Review",
  year: 1967,
  tags: "#Inspirational" 
};

let quoteTwo = {
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  source: "Mahatma Gandhi",
  citation: "The Words of Gandhi",
  year: 2001,
  tags: "#Life"
}

let quoteThree = {
  quote: "If you tell the truth, you don't have to remember anything.",
  source: "#Mark Twain"
}

let quoteFour = {
  quote: "It always seem impossible until it's done",
  source: "Nelson Mandela",
  citation: "Nelson Mandela’s Quotes and Tributes",
  year: 2013,
  tags: "#Motivational"
}

let quoteFive = {
  quote: "When something is important enough, you do it even if the odds are not in your favor",
  source: "Elon Musk",
  tags: "#Motivational"
}

let quotes = [quoteOne,quoteTwo,quoteThree,quoteFour,quoteFive];

/***
 * `getRandomQuote` function
***/

let getRandomQuote = (quotes) => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
let printQuote = () => {
  let quote = getRandomQuote(quotes);
  changeBackground();
  let htmlQuote = `<p class="quote"> ${quote.quote} </p> <p class="source"> ${quote.source}`;
  (quote.hasOwnProperty('citation')) ? htmlQuote += (`<span class="citation">${quote.citation}</span>`) : htmlQuote;
  (quote.hasOwnProperty('year')) ? htmlQuote += (`<span class="year">${quote.year}</span>`) : htmlQuote;
  (quote.hasOwnProperty('tags')) ? htmlQuote += (`<span class="year">${quote.tags}</span>`) : htmlQuote;
  htmlQuote.concat('</p>');
  document.getElementById('quote-box').innerHTML = htmlQuote;
  return htmlQuote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 *  Quotes automatically refresh at regular intervals.
 ***/
setInterval(printQuote, 3000);

/***
 *  change background colors
 ***/
let changeBackground = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.body.style.background = `rgb(${red},${green},${blue})`;
}
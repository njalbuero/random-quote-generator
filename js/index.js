var quotes = [{quote: "The power of imagination is what changes everything.",
              author: "Shinsekai Yori"},
             {quote: "A leader can't lead 'til he knows where he's going.",
             author: "John Locke"},
             {quote: "Stop thinking how ridiculous it is, and start asking yourself whether or not you believe it's going to work. That's why it is called a \"leap of faith\", Jack.",
             author: "Eloise Hawking"},
             {quote: "Do not mistake coincidence for fate.",
              author: "Mr. Eko"},
             {quote: "It only ends once. Anything that happens before that is just progress",
              author: "Jacob"}]
var index;
var currentIndex;

function newQuote(){
  do{
    index = Math.floor(Math.random() * 5);
  }while(index === currentIndex)
  currentIndex = index;
  $("#quote").html(quotes[index].quote);
  $("#author").html(quotes[index].author);
}

function tweet(){
  var quoteTweet = "\"" + quotes[index].quote + "\" -" + quotes[index].author;
  quoteTweet = encodeURI(quoteTweet);
  window.open("https://twitter.com/intent/tweet?text=" + quoteTweet);
}

$(function(){
  newQuote();
  $("#generate").click(newQuote);
  $("#tweet").click(tweet);
});
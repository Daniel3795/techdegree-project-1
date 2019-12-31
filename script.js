//QUOTES VARIABLE 
const quotes = [
{
    quote: '"Don\'t be so humble, you\'re not that great"',
    source: "Golda Meir",
    citation: "As Good As Golda: The Warmth and Wisdom of Israel's Prime Minister",
    year: "1970"
},
{
    quote: '"If we change ourselves, the tendencies in the world would also change."',
    source: "Mohandas Gandhi",
    citation: "The Collected Works of Mahatma Gandhi, volume XII",
    year: "1913"
},
{
    quote: '"Do I not destroy my enemies when I make them my friend?"',
    source: "Abraham Lincoln",
    citation: "The Gettysburg Address",
    year: "1863"
},
{
    quote: '"Only thing we have to fear is fear itself."',
    source: "Franklin D. Roosevelt",
    citation: "Inaugural Address",
    year: "1933"
},
{
    quote: '"Life is what happens when you\'re busy making other plans."',
    source: "John Lennon",
    citation: "Beautiful Boy (Darling Boy)",
    year: "1980"
},
{
    quote: '"I\'d rather not live like there isn\'t a god, than die and find out there really is."',
    source: "Kendrick Lamar",
    citation: "Faith",
    year: "2009"
}
];

//getRandomQuote FUNCTION
function getRandomQuote() {
    let random = Math.floor((Math.random() * quotes.length));
    return quotes[random];
};

//printQuote FUNCTION
function printQuote() {
    let quoteList = getRandomQuote();
    let message = ''
    message += '<p class="quote">' + quoteList.quote + '</p>';
    message += '<p class="source">' + quoteList.source +'</p>';
    if (quoteList.citation) {
        message += '<span class="citation">' + quoteList.citation + '</span>';
    }
    if (quoteList.year) {
        message += '<span class="year">' + quoteList.year + '</span>';
    }
    message + '</p>';
    return message;
};

document.write(printQuote());

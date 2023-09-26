var quotes = 
[
    'All our dreams can come true if we have the courage to pursue them. Walt Disney',
'The secret of getting ahead is getting started. Mark Twain',
'I ve missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I ve failed over and over and over again in my life, and that is why I succeed. Michael Jordan',
'Dont limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. Mary Kay Ash',
'The best time to plant a tree was 20 years ago. The second best time is now. Chinese Proverb',
'Only the paranoid survive. Andy Grove',
'It is hard to beat a person who never gives up. Babe Ruth',
'If people are doubting how far you can go, go so far that you cant hear them anymore. Michele Ruiz',
'We need to accept that we wont always make the right decisions, that we will screw up royally sometimes―understanding that failure is not the opposite of success, it is part of success. Arianna Huffington',
'Dont stay in bed unless you can make money in bed. George Burns',
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


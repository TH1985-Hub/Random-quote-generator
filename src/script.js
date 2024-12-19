function generateQuote(){
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        const quoteText = `"${data.quote}"`;
        const quoteAuthor = `${data.author}`;

        document.getElementById('quote').innerText = quoteText;
        document.getElementById('author').innerText = quoteAuthor;
        document.querySelector('.fb-share-share').setAttribute('data-href',`https://www.your-domain.com/your-page.html.com/quote/${data-quote}`);

})

        .catch(error => console.error('Error fetching quote:', error));
        
}
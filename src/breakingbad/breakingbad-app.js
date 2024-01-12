/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';

    // const quote = await fetchQuote();
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( response ) => {
        quoteLabel.innerHTML = response.quote;
        authorLabel.innerHTML = response.author;

        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', () => {
        element.innerHTML = 'Loading...';

        fetchQuote()
            .then( renderQuote );
    });

    fetchQuote()
        .then( renderQuote );
}
function getQuotes() {
    const quotes = 'data.json';
    fetch(quotes)
        .then(res => res.json())
        .then(data => { 
        console.log(data);
    });
}
getQuotes(); 
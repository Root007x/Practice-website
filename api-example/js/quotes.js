const load_quote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => display_quote(data))
}

const display_quote = quote => {
    const block_quote = document.getElementById('quote');
    block_quote.innerText = quote.quote;
}
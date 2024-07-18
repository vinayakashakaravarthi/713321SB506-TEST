document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('search-input');
    const query = input.value.trim();
    
    if (query) {
        // For demonstration, simply log the query
        console.log(Searching for: ${query});
        
        // Normally, you would fetch search results from an API here
        // For example:
        // fetch(https://api.example.com/search?q=${query})
        //     .then(response => response.json())
        //     .then(data => displayResults(data))
        //     .catch(error => console.error('Error:', error));
        
        // Clear the input
        input.value = '';
    }
});

function displayResults(data) {
    const resultsGrid = document.getElementById('results-grid');
    resultsGrid.innerHTML = ''; // Clear previous results
    
    // Example: Assume data.results is an array of image URLs
    data.results.forEach(url => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Search result';
        
        resultItem.appendChild(img);
        resultsGrid.appendChild(resultItem);
    });
}
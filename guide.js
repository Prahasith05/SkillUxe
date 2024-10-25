
function performSearch(category) {
    const resultsContainer = document.getElementById('careerResults');
    resultsContainer.innerHTML = ''; 

    if (careerData[category]) {
        
        careerData[category].forEach(career => {
            const careerItem = document.createElement('div');
            careerItem.classList.add('career-item');
            careerItem.textContent = career;
            resultsContainer.appendChild(careerItem);
        });
    } else {
        // Handle case when no results are found
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No career options found for the selected category.';
        resultsContainer.appendChild(noResultsMessage);
    }
}

// Function to initialize default content on page load
function initializeDefaultContent() {
    const resultsContainer = document.getElementById('careerResults');
    const welcomeMessage = document.createElement('p');
    resultsContainer.appendChild(welcomeMessage);
}

// Run initialization function on page load
document.addEventListener('DOMContentLoaded', initializeDefaultContent);

// Adding keyboard accessibility for career cards
document.querySelectorAll('.career-card').forEach(card => {
    card.setAttribute('tabindex', '0'); // Make them focusable

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            const category = card.getAttribute('onclick').match(/'([^']+)'/)[1];
            performSearch(category);
        }
    });
});

// Enhanced search functionality: searching by keyword
function searchByKeyword(keyword) {
    const resultsContainer = document.getElementById('careerResults');
    resultsContainer.innerHTML = '';
    const lowerCaseKeyword = keyword.toLowerCase();
    let found = false;

    for (const category in careerData) {
        careerData[category].forEach(career => {
            if (career.toLowerCase().includes(lowerCaseKeyword)) {
                const careerItem = document.createElement('div');
                careerItem.classList.add('career-item');
                careerItem.textContent = career;
                resultsContainer.appendChild(careerItem);
                found = true;
            }
        });
    }

    if (!found) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No careers matched your search.';
        resultsContainer.appendChild(noResultsMessage);
    }
}
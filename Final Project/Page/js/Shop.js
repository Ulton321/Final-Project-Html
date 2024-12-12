// JavaScript for Add to Cart redirect functionality
document.addEventListener("DOMContentLoaded", () => {
    // Find all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll(".popular__button");

    // Add click event listener to each button
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Redirect to the configuration page
            // You can append a query parameter to indicate which car was selected
            window.location.href = `config.html?car=${index}`;
        });
    });
});




// Select elements
const searchInput = document.getElementById('search-input');
const carCards = document.querySelectorAll('.popular__card');

function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();

    carCards.forEach(card => {
        const carTitle = card.querySelector('.popular__title').textContent.toLowerCase();

        // Show/hide cards based on search
        if (carTitle.includes(searchTerm)) {
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
}

// Event listeners
searchInput.addEventListener('input', filterCars);



document.getElementById('sort-select').addEventListener('change', function () {
    const sortType = this.value; // Get selected sort type
    const container = document.querySelector('.popular__container');
    const cards = Array.from(container.children); // Convert NodeList to Array

    // Sort the cards based on the price
    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.popular__price').textContent.replace('$', '').replace(',', ''));
        const priceB = parseFloat(b.querySelector('.popular__price').textContent.replace('$', '').replace(',', ''));

        if (sortType === 'asc') return priceA - priceB; // Low to High
        if (sortType === 'desc') return priceB - priceA; // High to Low
        return 0; // Default (no sorting)
    });

    // Clear and re-append sorted cards
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
});




document.querySelectorAll('.popular__button').forEach(button => {
    button.addEventListener('click', function () {
        // Get the parent card
        const card = this.closest('.popular__card');

        // Extract data from the card
        const title = card.querySelector('.popular__title').innerText;
        const subtitle = card.querySelector('.popular__subtitle').innerText;
        const price = card.querySelector('.popular__price').innerText;
        const imageUrl = card.querySelector('.popular__img').src;

        // Redirect to config.html with query parameters
        const params = new URLSearchParams({
            title: title,
            subtitle: subtitle,
            price: price,
            imageUrl: imageUrl
        });
        window.location.href = `config.html?${params.toString()}`;
    });
});





function redirectToConfig(title, subtitle, imageUrl, price) {
    const params = new URLSearchParams({
        title,
        subtitle,
        imageUrl,
        price
    });
    window.location.href = `config.html?${params.toString()}`;
}




document.addEventListener('DOMContentLoaded', function () {
    const packages = [
        { img: 'images/furniture.png', title: 'Simple Package', price: 'Php 5,000.00', description: 'Lorem ipsum ist dolor amit' },
        { img: 'images/furniture.png', title: 'Organic Package', price: 'Php 5,000.00', description: 'Lorem ipsum ist dolor amit' },
        { img: 'images/furniture.png', title: 'White Package', price: 'Php 5,000.00', description: 'Lorem ipsum ist dolor amit' },
        { img: 'images/furniture.png', title: 'Double Package', price: 'Php 5,000.00', description: 'Lorem ipsum ist dolor amit' },
        { img: 'images/furniture.png', title: 'Yellow Package', price: 'Php 5,000.00', description: 'Lorem ipsum ist dolor amit' }
    ];

    const container = document.getElementById('packages-container');

    packages.forEach(pkg => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
            <div class="card-10 h-100 mx-auto">
                <img src="${pkg.img}" class="card-img-top" alt="${pkg.title}">
                <div class="card-body text-center">
                    <h5 class="card-title font-color">${pkg.title}</h5>
                    <p class="card-text">${pkg.price}</p>
                    <p class="card-text">${pkg.description}</p>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cardsData = [
        { title: 'Simple Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Double Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Prime Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Special Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Best Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Simple Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Double Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Prime Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Special Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
        { title: 'Best Package', price: 'Php 5,000.00', description: 'Some quick example text to build on the card title and make...', image: 'images/furniture.png' },
    ];

    const container = document.getElementById('cards-container');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col';

        cardElement.innerHTML = `
            <div class="card-10 h-100 mx-auto">
                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                <div class="card-body text-center">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.price}</p>
                    <p class="card-text">${card.description}</p>
                    <button class="btn bg-custom-darkgreen">Buy Now</button>
                </div>
            </div>
        `;

        container.appendChild(cardElement);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        { quote: 'Excellent service and quality. Highly recommend!', name: 'John Doe', title: 'CEO, Company', image: 'images/guy.png', stars: 5 },
        { quote: 'Excellent service and quality. Highly recommend!', name: 'Jane Smith', title: 'Designer', image: 'images/girl.png', stars: 3},
        { quote: 'Excellent service and quality. Highly recommend!', name: 'Emily Johnson', title: 'Freelancer', image: 'images/girl.png', stars: 3 },
        { quote: 'Excellent service and quality. Highly recommend!', name: 'Michael Brown', title: 'Entrepreneur', image: 'images/guy.png', stars: 4 }
    ];

    const container = document.getElementById('reviews-container');

    reviews.forEach(review => {
        const col = document.createElement('div');
        col.className = 'col';

        // Create the star rating HTML
        const starsHtml = Array.from({ length: 5 }, (_, index) => 
            index < review.stars ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>'
        ).join(' ');

        col.innerHTML = `
            <div class="review-card d-flex align-items-center" style="height:100%;">
                <div class="review-content">
                    <p>"${review.quote}"</p>
                    <div class="review-stars">
                        ${starsHtml}
                    </div>
                    <div class="review-author-info">
                        <p class="review-author-name">${review.name}</p>
                        <p class="review-author-title">${review.title}</p>
                    </div>
                </div>
                <img src="${review.image}" alt="${review.name}" class="review-author-img">
            </div>
        `;

        container.appendChild(col);
    });
});




window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const readingId = urlParams.get('id'); 

    if (!readingId) {
        console.error('No reading ID found in the URL.');
        return;
    }


    fetch('readings.json')
        .then(response => response.json())
        .then(data => {
            const readingData = data.reading[readingId];
            if (readingData) {
                document.getElementById('reading-type').textContent = readingData.title || 'Tarot Reading';
                document.getElementById('card1-meaning').textContent = readingData.card1;
                document.getElementById('card2-meaning').textContent = readingData.card2;
                document.getElementById('card3-meaning').textContent = readingData.card3;
            } else {
                console.error('No data found for this reading ID:', readingId);
            }
        })
        .catch(error => {
            console.error('Error fetching readings.json:', error);
        });

    document.getElementById('generate-cards').addEventListener('click', function() {
        generateRandomCards(); 
    });
};

function generateRandomCards() {
    const cardData = [
        { image: 'cards/1-cups.jpg', meaning: 'This card represents a new beginning.' },
        { image: 'cards/2-cups.jpg', meaning: 'This card represents strength and resilience.' },
        { image: 'cards/3-cups.jpg', meaning: 'This card represents healing and recovery.' },
        { image: 'cards/4-cups.jpg', meaning: 'This card represents wisdom and guidance.' },
        { image: 'cards/5-cups.jpg', meaning: 'This card represents balance and harmony.' },
        { image: 'cards/6-cups.jpg', meaning: 'This card represents transformation.' }
    ];

    const randomCards = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * cardData.length);
        const randomCard = cardData[randomIndex];
        if (randomCard) {
            randomCards.push(randomCard);
        }
    }

    const cardBackImages = document.querySelectorAll('.card-back');

    randomCards.forEach((card, index) => {
        const imgElement = cardBackImages[index];

        imgElement.src = card.image;
        imgElement.alt = `Tarot Card ${index + 1}`;

        imgElement.style.width = "250px";  
        imgElement.style.height = "400px"; 
        imgElement.style.objectFit = "cover";

        const cardMeaning = document.getElementById(`card${index + 1}-meaning`);
        cardMeaning.textContent = card.meaning;
    });
}


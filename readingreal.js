window.onload = function () {
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

    document.getElementById('generate-cards').addEventListener('click', function () {
        generateRandomCards();
    });
};

function generateRandomCards() {
    const cardData = [

        { image: "cards/1-cups.jpg", meaning: "Ace of Cups: Represents new beginnings, emotional fulfillment, and spiritual awakening." },
        { image: "cards/2-cups.jpg", meaning: "Two of Cups: Symbolizes partnership, harmony, and mutual understanding in relationships." },
        { image: "cards/3-cups.jpg", meaning: "Three of Cups: Stands for celebration, friendship, and shared joy." },
        { image: "cards/4-cups.jpg", meaning: "Four of Cups: Indicates contemplation, apathy, or feeling unfulfilled despite opportunities." },
        { image: "cards/5-cups.jpg", meaning: "Five of Cups: Reflects loss, regret, and the need to focus on what remains." },
        { image: "cards/6-cups.jpg", meaning: "Six of Cups: Represents nostalgia, childhood memories, and innocence." },
        { image: "cards/7-cups.jpg", meaning: "Seven of Cups: Points to choices, imagination, and the potential for confusion or illusion." },
        { image: "cards/8-cups.jpg", meaning: "Eight of Cups: Suggests leaving something behind to seek deeper meaning or fulfillment." },
        { image: "cards/9-cups.jpg", meaning: "Nine of Cups: Known as the 'wish card,' symbolizes contentment and satisfaction." },
        { image: "cards/10-cups.jpg", meaning: "Ten of Cups: Represents happiness, family harmony, and emotional fulfillment." },
        { image: "cards/page-cups.jpg", meaning: "Page of Cups: Indicates creativity, new emotional experiences, and messages of love." },
        { image: "cards/knight-cups.jpg", meaning: "Knight of Cups: Suggests following your heart, romance, and emotional exploration." },
        { image: "cards/queen-cups.jpg", meaning: "Queen of Cups: Represents compassion, intuition, and emotional nurturing." },
        { image: "cards/king-cups.jpg", meaning: "King of Cups: Symbolizes emotional balance, wisdom, and maturity." },
            
        { image: "cards/1-wands.jpg", meaning: "Ace of Wands: Symbolizes inspiration, creativity, and the potential for growth." },
        { image: "cards/2-wands.jpg", meaning: "Two of Wands: Indicates planning, decision-making, and future possibilities." },
        { image: "cards/3-wands.jpg", meaning: "Three of Wands: Represents progress, expansion, and looking ahead with optimism." },
        { image: "cards/4-wands.jpg", meaning: "Four of Wands: Stands for celebration, stability, and community." },
        { image: "cards/5-wands.jpg", meaning: "Five of Wands: Suggests conflict, competition, and the struggle to find resolution." },
        { image: "cards/6-wands.jpg", meaning: "Six of Wands: Reflects victory, public recognition, and achievement." },
        { image: "cards/7-wands.jpg", meaning: "Seven of Wands: Indicates standing your ground, resilience, and defending your position." },
        { image: "cards/8-wands.jpg", meaning: "Eight of Wands: Represents swift movement, communication, and progress." },
        { image: "cards/9-wands.jpg", meaning: "Nine of Wands: Suggests persistence, resilience, and preparing for challenges." },
        { image: "cards/10-wands.jpg", meaning: "Ten of Wands: Reflects burdens, responsibility, and the need for delegation." },
        { image: "cards/page-wands.jpg", meaning: "Page of Wands: Symbolizes curiosity, enthusiasm, and creative opportunities." },
        { image: "cards/knight-wands.jpg", meaning: "Knight of Wands: Suggests passion, action, and adventure." },
        { image: "cards/queen-wands.jpg", meaning: "Queen of Wands: Represents confidence, warmth, and leadership." },
        { image: "cards/king-wands.jpg", meaning: "King of Wands: Reflects vision, power, and a bold approach to challenges." },
            
            
        { image: "cards/1-swords.jpg", meaning: "Ace of Swords: Stands for clarity, truth, and decisive action." },
        { image: "cards/2-swords.jpg", meaning: "Two of Swords: Reflects indecision, balance, and difficult choices." },
        { image: "cards/3-swords.jpg", meaning: "Three of Swords: Suggests heartbreak, sorrow, and emotional pain." },
        { image: "cards/4-swords.jpg", meaning: "Four of Swords: Indicates rest, recovery, and introspection." },
        { image: "cards/5-swords.jpg", meaning: "Five of Swords: Represents conflict, defeat, and unresolved tension." },
        { image: "cards/6-swords.jpg", meaning: "Six of Swords: Symbolizes transition, healing, and moving away from difficulties." },
        { image: "cards/7-swords.jpg", meaning: "Seven of Swords: Reflects strategy, deception, and hidden motives." },
        { image: "cards/8-swords.jpg", meaning: "Eight of Swords: Indicates feeling trapped, restricted, or uncertain." },
        { image: "cards/9-swords.jpg", meaning: "Nine of Swords: Suggests anxiety, nightmares, and inner turmoil." },
        { image: "cards/10-swords.jpg", meaning: "Ten of Swords: Reflects endings, betrayal, and the need for closure." },
        { image: "cards/page-swords.jpg", meaning: "Page of Swords: Symbolizes curiosity, new ideas, and the thirst for knowledge." },
        { image: "cards/knight-swords.jpg", meaning: "Knight of Swords: Suggests ambition, determination, and fast-paced action." },
        { image: "cards/queen-swords.jpg", meaning: "Queen of Swords: Represents intelligence, independence, and clear communication." },
        { image: "cards/king-swords.jpg", meaning: "King of Swords: Reflects authority, logic, and wise decision-making." },
            
         
        { image: "cards/1-pentacles.jpg", meaning: "Ace of Pentacles: Symbolizes new opportunities, abundance, and material success." },
        { image: "cards/2-pentacles.jpg", meaning: "Two of Pentacles: Reflects balance, multitasking, and adaptability." },
        { image: "cards/3-pentacles.jpg", meaning: "Three of Pentacles: Represents teamwork, skill, and collaboration." },
        { image: "cards/4-pentacles.jpg", meaning: "Four of Pentacles: Indicates control, security, and holding onto resources." },
        { image: "cards/5-pentacles.jpg", meaning: "Five of Pentacles: Reflects financial struggle, hardship, and seeking support." },
        { image: "cards/6-pentacles.jpg", meaning: "Six of Pentacles: Symbolizes generosity, giving, and receiving help." },
        { image: "cards/7-pentacles.jpg", meaning: "Seven of Pentacles: Indicates patience, growth, and assessing progress." },
        { image: "cards/8-pentacles.jpg", meaning: "Eight of Pentacles: Represents dedication, mastery, and honing skills." },
        { image: "cards/9-pentacles.jpg", meaning: "Nine of Pentacles: Reflects independence, self-sufficiency, and luxury." },
        { image: "cards/10-pentacles.jpg", meaning: "Ten of Pentacles: Suggests legacy, family wealth, and long-term stability." },
        { image: "cards/page-pentacles.jpg", meaning: "Page of Pentacles: Symbolizes ambition, new ventures, and learning opportunities." },
        { image: "cards/knight-pentacles.jpg", meaning: "Knight of Pentacles: Represents hard work, reliability, and steady progress." },
        { image: "cards/queen-pentacles.jpg", meaning: "Queen of Pentacles: Reflects nurturing, practicality, and material comfort." },
        { image: "cards/king-pentacles.jpg", meaning: "King of Pentacles: Symbolizes wealth, leadership, and material success." },
            
            
        { image: "cards/0-the-Fool.jpg", meaning: "The Fool: Symbolizes new beginnings, spontaneity, and taking a leap of faith." },
        { image: "cards/1-the-magician.jpg", meaning: "The Magician: Represents manifestation, resourcefulness, and taking control of your destiny." },
        { image: "cards/2-the-high-priestess.jpg", meaning: "The High Priestess: Reflects intuition, inner wisdom, and the mysteries of the subconscious." },
        { image: "cards/3-the-empress.jpg", meaning: "The Empress: Symbolizes abundance, nurturing, and fertility." },
        { image: "cards/4-the-emperor.jpg", meaning: "The Emperor: Represents authority, structure, and leadership." },
        { image: "cards/5-the-hierophant.jpg", meaning: "The Hierophant: Reflects tradition, spiritual guidance, and conformity." },
        { image: "cards/6-the-lovers.jpg", meaning: "The Lovers: Symbolizes love, union, and important choices." },
        { image: "cards/7-the-chariot.jpg", meaning: "The Chariot: Represents determination, willpower, and victory over obstacles." },
        { image: "cards/8-strength.jpg", meaning: "Strength: Reflects courage, inner strength, and the ability to overcome challenges." },
        { image: "cards/9-the-hermit.jpg", meaning: "The Hermit: Symbolizes solitude, introspection, and seeking inner truth." },
        { image: "cards/10-wheel-of-fortune.jpg", meaning: "The Wheel of Fortune: Represents fate, cycles, and the ebb and flow of life." },
        { image: "cards/11-justice.jpg", meaning: "Justice: Reflects fairness, balance, and legal matters." },
        { image: "cards/12-the-hanged-man.jpg", meaning: "The Hanged Man: Symbolizes sacrifice, letting go, and seeing things from a different perspective." },
        { image: "cards/13-death.jpg", meaning: "Death: Represents transformation, endings, and new beginnings." },
        { image: "cards/14-temperance.jpg", meaning: "Temperance: Reflects moderation, balance, and patience." },
        { image: "cards/15-the-devil.jpg", meaning: "The Devil: Symbolizes addiction, materialism, and being trapped in unhealthy patterns." },
        { image: "cards/16-the-tower.jpg", meaning: "The Tower: Represents sudden change, upheaval, and unexpected revelations." },
        { image: "cards/17-the-star.jpg", meaning: "The Star: Symbolizes hope, inspiration, and spiritual renewal." },
        { image: "cards/18-the-moon.jpg", meaning: "The Moon: Reflects illusion, uncertainty, and hidden truths." },
        { image: "cards/19-the-sun.jpg", meaning: "The Sun: Represents positivity, success, and clarity." },
        { image: "cards/20-judgement.jpg", meaning: "Judgement: Symbolizes reflection, rebirth, and making important decisions." },
        { image: "cards/21-the-world.jpg", meaning: "The World: Represents completion, fulfillment, and the end of a cycle." }



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
        imgElement.style.height = "431px";
        imgElement.style.objectFit = "cover";

        const cardMeaning = document.getElementById(`card${index + 1}-meaning`);
        cardMeaning.textContent = card.meaning;
    });
}


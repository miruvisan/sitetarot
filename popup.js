if (!document.getElementById("newsletter-popup")) {
    document.body.insertAdjacentHTML("beforeend", popupHTML);
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function showPopup() {
    document.getElementById('newsletter-popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
}

function hidePopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('form-message').style.display = 'none';
}

document.getElementById('close-popup').addEventListener('click', hidePopup);
document.getElementById('popup-overlay').addEventListener('click', hidePopup);

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email').value;

    if (!emailRegex.test(emailInput)) {
        document.getElementById('form-message').textContent = 'Please enter a valid email address.';
        document.getElementById('form-message').style.display = 'block';
        return;
    }

    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

if (subscribers.includes(emailInput)) {
    document.getElementById('form-message').textContent = 'You are already subscribed!';
    document.getElementById('form-message').style.color = 'red';
    document.getElementById('form-message').style.display = 'block';
    return;
}

subscribers.push(emailInput);
localStorage.setItem('subscribers', JSON.stringify(subscribers));

document.getElementById('form-message').textContent = 'Thank you for subscribing!';
document.getElementById('form-message').style.color = 'green';
document.getElementById('form-message').style.display = 'block';
setTimeout(hidePopup, 2000);
});


setTimeout(showPopup, 3000); 
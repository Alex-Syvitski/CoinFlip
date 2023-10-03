const coinImage = document.getElementById('coinImage');

// Load the sound
const coinSound = new Audio('https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/mouse-click.mp3');

function flipCoin() {
    if (Math.random() > 0.5) {
        coinImage.src = 'https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/coin-boy.gif';
    } else {
        coinImage.src = 'https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/coin-girl.gif'; // replace with your tails image URL
    }

    // Play the sound
    coinSound.play();
}

// Initial flip
flipCoin();

// Add event listener for the button
document.querySelector('.button').addEventListener('click', flipCoin);


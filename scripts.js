const coinImage = document.getElementById('coinImage');

// Load the sound
const coinSound = new Audio('https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/mouse-click.mp3');

function flipCoin() {
    coinImage.classList.add('coin-flip-animation');
    
    setTimeout(() => {
        if (Math.random() > 0.5) {
            coinImage.src = 'https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/coin-boy.gif';
        } else {
            coinImage.src = 'https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/coin-girl.gif'; // replace with your tails image URL
        }
        coinImage.classList.remove('coin-flip-animation');
    }, 500);
}


// Initial flip
flipCoin();

// Add event listener for the button
document.querySelector('.button').addEventListener('click', flipCoin);


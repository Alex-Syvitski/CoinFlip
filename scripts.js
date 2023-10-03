const coinImage = document.getElementById('coinImage');

function flipCoin() {
    if (Math.random() > 0.5) {
        coinImage.src = 'https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/coin-boy.gif';
    } else {
        coinImage.src = 'https://raw.githubusercontent.com/Alex-Syvitski/CoinFlip/main/coin-girl.gif'; // replace with your tails image URL
    }
}

// Initial flip
flipCoin();

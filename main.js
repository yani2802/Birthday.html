window.onload = () => {
    const balloonsContainer = document.querySelector('.balloons');

    // Generate floating balloons
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        balloonsContainer.appendChild(balloon);
    }
};

function showWish(wishNumber) {
    // Hide all other wishes
    const wishes = document.querySelectorAll('.wish-display');
    wishes.forEach(wish => (wish.style.display = 'none'));

    // Display the selected wish
    const selectedWish = document.getElementById(`wish-${wishNumber}`);
    if (selectedWish) {
        selectedWish.style.display = 'block';
    } else {
        console.error(`Wish ${wishNumber} not found.`);
    }
}

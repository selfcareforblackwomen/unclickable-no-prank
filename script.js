const noBtn = document.getElementById('noBtn');

// Make the No button unclickable - it will move away or stay disabled
noBtn.addEventListener('mouseenter', () => {
    // Option 1: Move the button away
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Option 2: Also prevent any clicks
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

// Handle Yes button click
function handleYes() {
    const card = document.querySelector('.card');
    card.classList.add('celebrating');
    
    const message = document.createElement('p');
    message.className = 'message';
    message.textContent = '🎉 I knew it! You love me! 🎉';
    card.appendChild(message);
    
    // Reset after celebration
    setTimeout(() => {
        card.classList.remove('celebrating');
        message.remove();
    }, 3000);
}

// Alternative: Make No button completely unclickable by disabling it
// Uncomment the line below if you want a different behavior
// noBtn.disabled = true;

// Optional: Log attempts to click the No button
noBtn.addEventListener('click', () => {
    console.log('Nice try! You cannot click No!');
});

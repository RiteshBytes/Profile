// Simulate loading with a timeout
window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        const profileContainer = document.querySelector('.profile-card-container');
        
        // Hide loading screen
        loadingScreen.classList.add('hidden');
        
        // Show profile card with fade-in animation
        setTimeout(() => {
            profileContainer.classList.add('show');
        }, 200);
        
        // Remove loading screen from DOM after transition
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
        });
    }, 2000); // Adjust this timeout as needed
});

// Mouse move effect for card shine
document.querySelector('.profile-card').addEventListener('mousemove', function(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    // Update the shine gradient position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
});
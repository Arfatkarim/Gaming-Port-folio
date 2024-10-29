// Simple JavaScript to enhance 3D effect
const comingSoon = document.querySelector('.coming-soon');

comingSoon.addEventListener('mouseover', () => {
    comingSoon.style.transform = 'scale(1.05)'; // Scale up on hover
});

comingSoon.addEventListener('mouseout', () => {
    comingSoon.style.transform = 'scale(1)'; // Scale down when not hovered
});

// Simple animation effect
document.querySelectorAll('.profile div').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.transform = 'scale(1.1)';
    });
    element.addEventListener('mouseout', function() {
        element.style.transform = 'scale(1)';
    });
});

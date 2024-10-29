document.getElementById('copyButton').addEventListener('click', function() {
    const contactInfo = `Name: Mohammad Arfat Karim\nRole: Gamer\nField: Diploma Engineer\nLevel: 68\nPhone Number: 01891735403\nEmail: arafatkarim37@gmail.com`;
    
    navigator.clipboard.writeText(contactInfo).then(function() {
        const message = document.getElementById('message');
        message.classList.remove('hidden'); // Show the message
        setTimeout(() => {
            message.classList.add('hidden'); // Hide after 3 seconds
        }, 3000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});


document.getElementById('serverButton').addEventListener('click', function() {
    const userResponse = confirm('You clicked the server button! Do you want to connect to the server at: Prismpeak.mczhost.fun?');
    
});


document.getElementById('donateButton').addEventListener('click', function() {
    const userResponse = confirm('You clicked the donate button! Do you want to proceed to the donation page?');
    if (userResponse) {
        window.location.href = 'DONATION.html';
    } else {
        alert('Donation process canceled.');
    }
});


document.querySelectorAll('.navbar ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.style.fontWeight = 'bold';
        link.style.color = 'red';
    }
});


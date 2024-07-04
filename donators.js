// Fetch and display donors
fetch('/donations')
    .then(response => response.json())
    .then(donations => {
        const donorList = document.getElementById('donorList');
        donorList.innerHTML = ''; // Clear existing donors

        donations.forEach(donation => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${donation.name}</td>
                <td>${donation.email}</td>
                <td>${donation.amount}</td>
            `;
            donorList.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching donations:', error));

document.getElementById('getLocation').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        document.getElementById('rentalForm').setAttribute('data-latitude', latitude);
        document.getElementById('rentalForm').setAttribute('data-longitude', longitude);
        alert(`Localização obtida: ${latitude}, ${longitude}`);
    });
});

document.getElementById('rentalForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const vehicleId = document.getElementById('vehicleId').value;
    const image = document.getElementById('image').files[0];
    const latitude = this.getAttribute('data-latitude');
    const longitude = this.getAttribute('data-longitude');

    const formData = new FormData();
    formData.append('vehicleId', vehicleId);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('image', image);

    const response = await fetch('http://localhost:5000/api/rentals', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        document.getElementById('statusMessage').innerText = 'Locação registrada com sucesso!';
        this.reset();
    } else {
        document.getElementById('statusMessage').innerText = 'Erro ao registrar locação.';
    }
});

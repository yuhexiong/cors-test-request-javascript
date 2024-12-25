function fetchData() {
    fetch('http://localhost:8000/api/test', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
}

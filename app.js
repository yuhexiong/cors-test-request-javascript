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
    .then(() => {
        alert('測試請求成功！'); 
    })
    .catch(error => {
        console.error('Error:', error); 
        alert(`測試請求失敗: ${error.message}`);
    });
}

window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {
    const ConnectionCheck = document.getElementById('ConnectionCheck');
    const ConnectionIp = document.getElementById('ConnectionIp');
    const ConnectionStrengthElement = document.getElementById('ConnectionStrength'); 

    ConnectionCheck.textContent = 'Checking...';

    if (navigator.onLine) {
        fetch('https://api.ipify.org/?format=json')
            .then((response) => response.json())
            .then((data) => {
                ConnectionIp.textContent = data.ip;
                ConnectionCheck.textContent = 'Connected';
                const connection = navigator.connection;
                const ConnectionStrength = connection ? connection.downlink + 'Mbps' : 'Unknown';

                ConnectionStrengthElement.textContent = ConnectionStrength; 
            })
            .catch(() => {
                ConnectionCheck.textContent = 'Disconnected';
                ConnectionIp.textContent = '-';
                ConnectionStrengthElement.textContent = '-';
            });
    } else {
        ConnectionCheck.textContent = 'Disconnected';
        ConnectionIp.textContent = '-';
        ConnectionStrengthElement.textContent = '-';
    }
}

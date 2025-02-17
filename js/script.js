document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const users = {
        'usuario1': 'password1',
        'usuario2': 'password2',
        'usuario3': 'password3',
        'usuario4': 'password4',
        'usuario5': 'password5',
        'usuario6': 'password6',
        'usuario7': 'password7',
        'usuario8': 'password8'
    };

    if (users[username] && users[username] === password) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Contraseña correcta';
        setTimeout(() => {
            window.location.href = 'pages/' + username + '.html';
        }, 1000);
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Usuario o contraseña incorrectos';
    }
});
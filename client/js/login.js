export default function login() {
    var username = document.getElementById('input-username');
    var password = document.getElementById('input-password');
    var data = new URLSearchParams();
    data.append('username', username.value);
    data.append('password', password.value);

    fetch('http://localhost:8080/api/auth', {
        method: 'post',
        body: data,
        headers: {'content-type': 'aplication/json'}
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else throw new Error('Failed authenticating user. ')
    })
    .then(res => {
        console.log('User authenticated. ');
        return true;
    })
    .catch(error => {
        console.log(error);
        
    })
    username.value = '';
    password.value = '';
}
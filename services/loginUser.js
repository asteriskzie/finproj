export default function loginUser(username, password) {
    var axios = require('axios');
    var data = JSON.stringify({
        username, 
        password,
    });

    var config = {
        method: 'post',
        url: 'https://avatar.ristek.cs.ui.ac.id/auth/login',
        headers: { 
            'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e', 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
}
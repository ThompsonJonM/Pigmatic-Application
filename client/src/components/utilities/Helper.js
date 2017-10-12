import axios from 'axios';

export default class Helper {
    
    sendData(userData) {
        axios.post('http://localhost:3000/users/add/post', 
        {
            username: userData.username,
            password: userData.password
        })

        .then(function(response) {
            console.log(response);
        })

        .catch(function(error) {
            console.log(error);
        });
    }
}
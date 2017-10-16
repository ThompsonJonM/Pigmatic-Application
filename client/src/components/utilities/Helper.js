import axios from 'axios';

export default class Helper {
    
    sendUserData(userData) {
        axios.post('http://localhost:3000/users/add-user/post', 
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

    sendCollectionData(collectionData) {
        axios.post('http://localhost:3000/users/add-collection/post',
        {
            name: collectionData.collectionName
        })

        .then(function(response) {
            console.log(response);
        })

        .catch(function(error) {
            console.log(error);
        });
    }

    sendAccessionData(accessionData) {
        axios.post('http://localhost:3000/users/add-accession/post',
        {
            acqNumber: accessionData.acqNumber,
            acqMethod: accessionData.acqMethod,
            acqName: accessionData.acqName,
            acqCollection: accessionData.acqCollection,
            acqProv: accessionData.acqProv,
            acqDonor: accessionData.acqDonor,
            acqDescribe: accessionData.acqDescribe
        })

        .then(function(response) {
            console.log(response);
        })

        .catch(function(error) {
            console.log(error);
        });
    }
}
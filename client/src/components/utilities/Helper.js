import axios from 'axios';

export default class Helper {

    sendUserData(userData) {
        axios.post('/users/add-user/post',
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

    sendCollectionData(collectionData, id) {
        axios.post('/users/update-collection/'+id,
        {
            collectionName: collectionData.collectionName,
            accessionID: collectionData.accessionID
        })

        .then(res => this.setState({ collections: res.collectionData }))

        .catch(function(error) {
            console.log(error);
        });
    }

    sendAccessionData(accessionData, accessionID) {
        axios.post('/users/update-accession/'+accessionID,
        {
            acqNumber: accessionData.acqNumber,
            acqMethod: accessionData.acqMethod,
            acqName: accessionData.acqName,
            acqCollection: accessionData.acqCollection,
            acqProv: accessionData.acqProv,
            acqDonor: accessionData.acqDonor,
            acqDescribe: accessionData.acqDescribe
        })

        .then(res => this.setState({ accessions: res.accessionData }))

        .catch(function(error) {
            console.log(error);
        });
    }

    deleteData(id) {
        axios.get('/users/collections/delete/'+id)

        .then(console.log('Collection Removed')).catch(err => console.log(err))
    }
}
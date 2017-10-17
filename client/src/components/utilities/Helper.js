import axios from 'axios';

export default class Helper {

    sendCollectionData(collectionData) {
        axios.post('http://localhost:3000/collections/add-collection/post',
        {
            collectionName: collectionData.collectionName,
            accessionID: collectionData.accessionID
        })

        .then(function(response) {
            console.log(response);
        })

        .catch(function(error) {
            console.log(error);
        });
    }

    sendAccessionData(accessionData) {
        axios.post('http://localhost:3000/collections/accessions/add-accession/post',
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

    deleteData(id) {
        axios.get('http://localhost:3000/collections/delete/'+id)

        .then(console.log('Collection Removed')).catch(err => console.log(err))
    }
}
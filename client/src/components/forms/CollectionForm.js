import React from 'react';
import Helper from '../utilities/Helper';

export default class CollectionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collectionName: ''
        }

        this.addHelper = new Helper();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let collectionData = {
            collectionName: this.state.collectionName
        }

        this.addHelper.sendCollectionData(collectionData);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Collection Name:
                        <input type='text' name='collectionName' onChange={this.handleChange} className='form-control'/>
                    </ label>

                    <br />

                    <input type='submit' value='submit' className='btn btn-primary' />
                </ form>
            </ div>
        )
    }
}
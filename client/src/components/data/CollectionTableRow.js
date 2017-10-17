import React from 'react';
import Helper from '../utilities/Helper';

export default class CollectionTableRow extends React.Component {

    constructor(props) {
        super(props);
    
        this.addHelper = new Helper();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
    event.preventDefault();
    this.addHelper.deleteData(this.props.obj._id);

    }

    render() {
        return (
            <tr>
                <td>
                    { this.props.obj._id }
                </ td>

                <td>
                    { this.props.obj.collectionName }
                </ td>

                <td>
                    { this.props.obj.accessionID }
                </ td>

                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type='submit' value='Delete' className='btn btn-danger' />
                    </ form>
                </td>
            </ tr>
        );
    }
}
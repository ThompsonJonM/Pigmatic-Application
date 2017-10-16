import React from 'react';

export default class CollectionTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj.museumCollections._id }
                </ td>

                <td>
                    { this.props.obj.museumCollections }
                </ td>

                <td>
                    <button className='btn btn-primary'> Edit </ button>
                </ td>
                <td>
                    <button className='btn btn-danger'> Delete </ button>
                </ td>
            </ tr>
        );
    }
}
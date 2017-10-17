import React from 'react';

export default class CollectionTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj.museumCollections.collectionName }
                </ td>
            </ tr>
        );
    }
}
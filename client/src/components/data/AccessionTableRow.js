import React from 'react';

export default class AccessionTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj._id }
                </ td>

                <td>
                    { this.props.obj.museumCollections[0].collectionName }
                </ td>

                <td>
                    { this.props.obj.museumCollections[0] }
                </ td>

            </ tr>
        );
    }
}
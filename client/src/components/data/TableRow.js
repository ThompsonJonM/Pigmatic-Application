import React from 'react';

export default class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj._id }
                </ td>

                <td>
                    { this.props.obj.user }
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
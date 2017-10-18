import React from 'react';
import { Link } from 'react-router-dom';

export default class UserTableRow extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    { this.props.obj.username }
                </ td>

                <td className='text-center'>
                    <Link to={"/add-collection/"+this.props.obj._id} className="btn btn-dark">Add</Link>
                </td>

                <td className='text-center'>
                    <Link to={"/users/view-collections/"+this.props.obj._id} className="btn btn-dark">View</Link>
                </td>
            </ tr>
        );
    }
}
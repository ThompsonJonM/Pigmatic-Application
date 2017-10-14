import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';
import UserTableRow from './UserTableRow';

export default class ViewUsers extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { value: '', users: '' };
        this.addHelper = new Helper();
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')

        .then(response => {
            console.log(response.data);
            console.log(this.state.users);
            this.setState({ users: response.data });
        })

        .catch(function(error) {
            console.log(error);
        })
    }

    tabRow() {
        if (this.state.users instanceof Array) {
            return this.state.users.map(function(object, i) {
                return <UserTableRow obj={ object } key={ i } />;
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td> No. </ td>
                            <td> User </ td>
                        </ tr>
                    </ thead>

                    <tbody>
                        { this.tabRow() }
                    </ tbody>
                </ table>
            </ div>
        );
    }
}
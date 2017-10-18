import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';
import UserTableRow from './UserTableRow';

export default class ViewUsers extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            users: '' 
        };
        
        this.addHelper = new Helper();
    }

    componentDidMount() {
        axios.get('/users')

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
                <div className='row'>
                    <div className='col-10 ml-auto mr-auto'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <td> Institution Name </ td>
                                    <td className='text-center'> Add Collection </ td>
                                    <td className='text-center'> View Collection </ td>
                                </ tr>
                            </ thead>

                            <tbody>
                                { this.tabRow() }
                            </ tbody>
                        </ table>
                    </ div>
                </ div>
            </ div>
        );
    }
}
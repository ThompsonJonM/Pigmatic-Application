import React from 'react';

export default class AccessionTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj.acqNumber }
                </ td>

                <td>
                    { this.props.obj.acqMethod }
                </ td>

                <td>
                    { this.props.obj.acqName }
                </ td>

                <td>
                    { this.props.obj.acqCollection }
                </ td>

                <td>
                    { this.props.obj.acqProv }
                </ td>

                <td>
                    { this.props.obj.acqDonor }
                </ td>

                <td>
                    { this.props.obj.acqDescribe }
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
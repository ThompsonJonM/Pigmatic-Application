import React from 'react';

export default class AccessionTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj.accessions[0].acqCollection }
                </ td>

                <td className='text-center'>
                    { this.props.obj.accessions[0].acqNumber }
                </ td>

                <td>
                    { this.props.obj.accessions[0].acqName }
                </ td>

                <td className='text-center'>
                    { this.props.obj.accessions[0].acqMethod }
                </ td>

                <td>
                    { this.props.obj.accessions[0].acqProv }
                </ td>

                <td>
                    { this.props.obj.accessions[0].acqDonor }
                </ td>

                <td>
                    { this.props.obj.accessions[0].acqDescribe }
                </ td>

            </ tr>
        );
    }
}
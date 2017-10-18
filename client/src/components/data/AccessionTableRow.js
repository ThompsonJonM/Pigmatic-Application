import React from 'react';

// for (let i = 0; i < this.props.obj.accessions.length; i++) {
//     // console.log(this.props.obj.accessions[i]);

//     const Accession = {
//         "acqCollection": this.props.obj.accessions[i].acqCollection,
//         "acqNumber": this.props.obj.accessions[i].acqNumber,
//         "acqName": this.props.obj.accessions[i].acqName,
//         "acqMethod": this.props.obj.accessions[i].acqMethod,
//         "acqProv": this.props.obj.accessions[i].acqProv,
//         "acqDonor": this.props.obj.accessions[i].acqDonor,
//         "acqDescribe": this.props.obj.accessions[i].acqDescribe
//     }

//     console.log(Accession);

export default class AccessionTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td className='text-center'>
                    { this.props.obj.acqNumber }
                </ td>

                <td className='text-center'>
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

            </ tr>
        );
    }
}
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
                    { this.props.obj.accessions[0].acqNumber }
                </ td>

                <td className='text-center'>
                    { this.props.obj.accessions[0].acqMethod }
                </ td>

                <td>
                    { this.props.obj.accessions[0].acqName }
                </ td>

                <td>
                    { this.props.obj.accessions[0].acqCollection }
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
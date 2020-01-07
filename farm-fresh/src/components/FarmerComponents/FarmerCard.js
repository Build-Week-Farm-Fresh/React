import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

// CODE THAT WILL BE USED

// export default function FarmerCard({ FarmerData }) {
//     return (
//         <div className="farmer_card">
//             <Card>
//                 <CardTitle>Name: {FarmerCard.name}</CardTitle>
//                 <CardBody>
//                     <CardText>Email: {FarmerCard.email} </CardText>
//                     <CardText>Zip: {FarmerCard.zip} </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     )
// }

// CODE FOR TESTING LOCAL ENVIRONMENT
export default function FarmerCard({ FarmerData }) {
    let width = {
        width: '500px'
    };

    return (
        <div className="farmer_card" style={width}>
            <Card>
                <CardTitle>Name: Omid</CardTitle>
                <CardBody>
                    <CardText>Email: omid@omid.com </CardText>
                    <CardText>Zip: 97211 </CardText>
                </CardBody>
                <Button color="primary">Button test</Button>
            </Card>

        </div>
    )
}
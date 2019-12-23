import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

export default function FarmerCard({ FarmerData }) {
    return (
        <div className="farmer_card">
            <Card>
                <CardTitle>Name: {FarmerCard.name}</CardTitle>
                <CardBody>
                    <CardText>Email: {FarmerCard.email} </CardText>
                    <CardText>Zip: {FarmerCard.zip} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

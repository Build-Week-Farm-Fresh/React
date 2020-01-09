git import React from "react";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default function CustomerCard({ CustomerData }) {
    return (
        <div className="customer_card">
            <Card>
                <CardTitle>Name: {CustomerData.name}</CardTitle>
                <CardBody>
                    <CardText>Email: {CustomerData.email} </CardText>
                    <CardText>Address: {CustomerData.address} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

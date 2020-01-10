import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

export default function ProduceCard({ ProduceData }) {
    return (
        <div className="produce_card">
            <Card>
                <CardTitle>Name: {ProduceData.name}</CardTitle>
                <CardBody>
                    <CardText>Price: {ProduceData.price} </CardText>
                    <CardText>Available quantity: {ProduceData.quantity} </CardText>
                </CardBody>
            </Card>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

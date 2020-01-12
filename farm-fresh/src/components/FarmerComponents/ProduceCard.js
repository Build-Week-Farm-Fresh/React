import React from "react";

import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

export default function ProduceCard({ ProduceData }) {
    return (
        <Row className="produce_card">
            <Col sm='6'>
                <Card>
                    <CardTitle>Name: {ProduceData.name}</CardTitle>
                    <CardImg width="50%" src="" alt='Just imagine a `${ProduceData.name}` here' />
                    <CardBody style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardText>Price: {ProduceData.price} </CardText>
                        <CardText>Available quantity: {ProduceData.quantity} </CardText>
                    </CardBody>
                    <Button color="info">edit</Button>
                    <Button color="danger">delete</Button>
                </Card>
            </Col>
            <Col sm='6'>
                <Card>
                    <CardTitle>Name: {ProduceData.name}</CardTitle>
                    <CardImg width="50%" src="" alt='Just imagine a `${ProduceData.name}` here' />
                    <CardBody>
                        <CardText>Price: {ProduceData.price} </CardText>
                        <CardText>Available quantity: {ProduceData.quantity} </CardText>
                    </CardBody>
                    <Button color="info">edit</Button>
                    <Button color="danger">delete</Button>
                </Card>
            </Col>
        </Row>
    )
}

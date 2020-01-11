// id, produce item, produce price, produce quantity
import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../utils/AxiosWithAuth';
import AddProduce from './AddProduce'
import { Link } from "react-router-dom"
import { Card, CardTitle, CardImg, CardBody, CardText, Button, Row, Col } from 'reactstrap';

export default function FarmerProduceList() {

    const [produceList, setProduceList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/produce/user/1')
            .then(response => {
                setProduceList(response.data);
            })
            .catch(error => {
                console.log('error', error)
            })
    }, []);

    const handleDelete = (e, id) => {
        e.preventDefault()

        const produce = produceList.find((produce) => produceList.id === id)

        if (window.confirm("Are you sure you want to delete this item?")) {
            setProduceList(produceList.filter(produce => produceList.id !== id))

            axiosWithAuth()
                .delete(`/produce/${id}`)
                .then(res => {
                    console.log(res)
                    axiosWithAuth()
                        .get('produce/user/1')
                        .then(res => setProduceList(res.data))
                })
                .catch((error) => {
                    console.log(error)
                    setProduceList([...produceList, produce])
                })
        }
    }

    if (!produceList) {
        return <div>Farmer had a sad harvest &#128577 </div>
    }

    return (
        <div>
            <h1>My Produce</h1>
            <AddProduce setProduceList={setProduceList} />
            {produceList.map((produceItem) => (
                <Row>
                    <Col>
                        <Card style={{ width: '600px', margin: '0 0 0 579px ' }}>
                            <div key={produceItem.id}>
                                <CardTitle><h5>Name:</h5> {produceItem.name}</CardTitle>
                                <CardBody style={{ backgroundColor: ' #ebebc5 ' }}>
                                    <CardText><h5>Price:</h5> {produceItem.price}</CardText>
                                    <CardText><h5>Available quantity:</h5> {produceItem.quantity}</CardText>
                                </CardBody>
                                <Button color="info"><Link to={`/editproduce/${produceItem.id}`}>edit</Link></Button>
                                <Button color='danger' onClick={e => handleDelete(e, produceItem.id)}>delete</Button>
                            </div>
                        </Card>
                    </Col>
                    {/* <Col sm='6'>
                        <Card>
                            <div key={produceItem.id}>
                                <CardTitle><h5>Name:</h5> {produceItem.name}</CardTitle>
                                <CardBody>
                                    <CardText><h5>Price:</h5> {produceItem.price}</CardText>
                                    <CardText><h5>Available quantity:</h5> {produceItem.quantity}</CardText>
                                </CardBody>
                                <Button color="info"><Link to={`/editproduce/${produceItem.id}`}>edit</Link></Button>
                                <Button color='danger' onClick={e => handleDelete(e, produceItem.id)}>delete</Button>
                            </div>
                        </Card>
                    </Col> */}
                </Row>
            ))}
        </div>
    );
}
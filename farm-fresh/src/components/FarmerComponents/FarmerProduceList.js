// id, produce item, produce price, produce quantity
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import AddProduce from './AddProduce'
import {Link} from "react-router-dom"
import styled from "styled-components"



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
    
    return (
        <div>
            <h1>My Produce</h1>
            <AddProduce setProduceList={setProduceList}/>
            <ProduceCard>
                {produceList.map((produceItem) => (
                    <ProduceDiv key={produceItem.id}>
                        <h5>{produceItem.name}</h5>
                        <p>Price: ${produceItem.price}</p>
                        <p>Qty Available: {produceItem.quantity}</p>
                        <Link to={`/editproduce/${produceItem.id}`}>
                            <button>edit</button>
                        <button onClick={e => handleDelete(e, produceItem.id)}>delete</button> 
                        </Link>
                    </ProduceDiv>
                ))}
            </ProduceCard>
        </div>
    );
}

const ProduceDiv = styled.div`
    width: 200px;
    padding: 20px;
    border: 1px solid black;
    margin: 7px;
`
const ProduceCard = styled.div`
    width: 100%
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse
    justify-content: center;

`
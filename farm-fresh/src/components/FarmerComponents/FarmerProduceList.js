// id, produce item, produce price, produce quantity
import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../utils/AxiosWithAuth';
import AddProduce from './AddProduce'
import { Link } from "react-router-dom"


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
                <div key={produceItem.id}>
                    <Link to={`/editproduce/${produceItem.id}`}>
                        <button>edit</button>
                    </Link>
                    <button onClick={e => handleDelete(e, produceItem.id)}>delete</button>
                    <p>{produceItem.name}</p>
                    <p>{produceItem.price}</p>
                    <p>{produceItem.quantity}</p>
                </div>
            ))}
        </div>
    );
}


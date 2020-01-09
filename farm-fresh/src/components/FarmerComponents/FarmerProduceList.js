// id, produce item, produce price, produce quantity
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from 'axios';
import ProduceCard from './ProduceCard';

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

    if (!produceList) {
        return <div>Farmer had a sad harvest &#128577 </div>
    }

    return (
        <section className="product-list">
            <div>
                <h1>My Produce</h1>
                <button>Add Produce</button>
                {produceList.map(produce => {
                    return (
                        <ProduceCard ProduceData={produce} key={produce.id} />
                    )
                })}
            </div>
        </section>
    );
}


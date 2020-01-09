// customer name, item name, item quantity, order total, customer address, order date, order time

import React from "react";
import axios from 'axios';
import ProduceCard from '../ProduceCard';
import CustomerCard from '../CustomerComponents/CustomerCard';

export default function FarmerOrder() {

    const [produceOrder, setProduceOrder] = useState([]);


    useEffect(() => {

        axios
            .get(`INSERT API LINK`)
            .then(response => {
                setProduce(response);
            })
            .catch(error => {
                console.log('error', error)
            })
    }, []);

    if (!produceOrder) {
        return <div>'Sorry, no new business today ¯\_(ツ)_/¯' </div>
    }

    return (
        <section className="product-list">
            <div>
                <CustomerCard CustomerData={} key={} />
            </div>
            <div>
                {produceOrder.map(produce => {
                    return (
                        <ProduceCard ProduceData={produce} key={produce.id} />
                    )
                })}
            </div>
        </section>
    );
}
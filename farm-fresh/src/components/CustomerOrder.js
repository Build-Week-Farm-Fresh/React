// items, quantity, farmer


import React from "react";
import axios from 'axios';
import ProduceCard from './ProduceCard';
import CustomerCard from './CustomerCard';

export default function CustomerOrder() {

    const [order, setOrder] = useState([]);


    useEffect(() => {

        axios
            .get(`INSERT API LINK`)
            .then(response => {
                setOrder(response);
            })
            .catch(error => {
                console.log('error', error)
            })
    }, []);

    if (!order) {
        return <div>Well, you gonna put something in your shopping cart? </div>
    }

    return (
        <section className="customer-order">
            <div>
                {order.map(item => {
                    return (
                        <ProduceCard ProduceData={item} key={item.id} />
                    )
                })}
            </div>
            <div>
                <CustomerCard CustomerData={} key={} />
            </div>
        </section>
    );
}


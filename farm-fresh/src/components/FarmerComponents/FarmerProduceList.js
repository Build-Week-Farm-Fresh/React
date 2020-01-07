// id, produce item, produce price, produce quantity

import React from "react";
import axios from 'axios';
import ProduceCard from './ProduceCard';

export default function ProduceList() {

    const [produce, setProduce] = useState([]);


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

    if (!produce) {
        return <div>Farmer had a sad harvest &#128577 </div>
    }

    return (
        <section className="product-list">
            <div>
                {produce.map(produce => {
                    return (
                        <ProduceCard ProduceData={produce} key={produce.id} />
                    )
                })}
            </div>
        </section>
    );
}


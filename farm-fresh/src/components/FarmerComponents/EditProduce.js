import React, { useState, useEffect } from "react";
import axios from "axios";

function EditProduce(props) {
  const [produceDetails, setProduceDetails] = useState({
    name: "",
    price: "",
    quantity: ""
  });
  console.log(props)
  useEffect(() => {
    fetchProduce(props.match.params.id);
  }, [props.match.params.id]);

  const fetchProduce = id => {
    axiosWithAuth()
      .get(`/produce/${id}`)
      .then(res => {
        console.log(res.data)
        setProduceDetails(res.data)
      })
      .catch(err => console.error(err));
  };

  const onChange = e => {
    setProduceDetails({ ...produceDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`/produce/${produceDetails.id}`, produceDetails)
      .then(() => props.history.push(`/produce/${produceDetails.id}`));
  };

  return (
    <>
      <h1>Edit Produce</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={produceDetails.name}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            value={produceDetails.price}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="quantity"
            value={produceDetails.quantity}
            onChange={onChange}
          />
        </div>
        <button>Save Changes</button>
      </form>
    </>
  );
}

export default EditProduce();

import React, { useState } from 'react'
import axiosWithAuth from '../../utils/AxiosWithAuth';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';


export default function AddProduce(props) {
  const farmerID = useSelector(state => state.farmerID)
  const [newProduceItem, setNewProduceItem] = useState({ name: "", price: null, quantity: null })
  console.log(farmerID)

  const handleChange = event => {
    setNewProduceItem({ ...newProduceItem, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault()
    const produce = {
      ...newProduceItem,
      farmer_id: farmerID
    }
    axiosWithAuth()
      .post('/produce', produce)
      .then(res => {
        console.log(res)
        axiosWithAuth()
          .get('/produce/user/1')
          .then(res => props.setProduceList(res.data))
      })
      .catch(err => console.error(err))
    setNewProduceItem({ name: "", price: "", quantity: "" })
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Produce Name" value={newProduceItem.name} onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" value={newProduceItem.price} onChange={handleChange} />
        <input type="text" name="quantity" placeholder="quantity" value={newProduceItem.quantity} onChange={handleChange} />
        <Button color="success">Add Produce</Button>
      </form>
    </>
  )
}
import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function AddProduce(props) {
  const farmerID = useSelector(state => state.farmerID);
  const [newProduceItem, setNewProduceItem] = useState({
    name: "",
    price: "",
    quantity: ""
  });
  console.log(farmerID);

  const handleChange = e => {
    setNewProduceItem({ ...newProduceItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const produce = {
      ...newProduceItem,
      farmer_id: farmerID
    };
    axiosWithAuth()
      .post("/produce", produce)
      .then(res => {
        console.log(res);
        axiosWithAuth()
          .get("/produce/user/1")
          .then(res => props.setProduceList(res.data));
      })
      .catch(err => console.error(err));
    setNewProduceItem({ name: "", price: "", quantity: "" });
  };

  return (
    <AddDiv>
      <p>
        <i
          style={{ color: "green", fontSize: "25px" }}
          className="fas fa-pepper-hot"
        ></i>
        <i
          style={{ color: "yellow", fontSize: "25px" }}
          className="fas fa-lemon"
        ></i>
        <i
          style={{ color: "red", fontSize: "25px" }}
          className="fas fa-apple-alt"
        ></i>
        <i
          style={{ color: "orange", fontSize: "25px" }}
          className="fas fa-carrot"
        ></i>
      </p>
      <h4>Add More Produce To Inventory</h4>
      <AddForm onSubmit={handleSubmit}>
        <AddInputs>
          <Input
            type="text"
            name="name"
            placeholder="Produce Name"
            value={newProduceItem.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="price"
            placeholder="Price"
            value={newProduceItem.price}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={newProduceItem.quantity}
            onChange={handleChange}
          />
        </AddInputs>
        <AddBtn>ADD NEW ITEM</AddBtn>
      </AddForm>
    </AddDiv>
  );
}

const AddDiv = styled.div`
  padding-top: 30px;
  margin: 40px auto 40px;
  border: 2px solid #9f937d;
  width: 700px;
`;

const AddBtn = styled.button`
  width: 300px;
  margin: 0 auto;
  background-color: orange;
  color: white;
  font-weight: bold;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 40px;
`;

const AddInputs = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const Input = styled.input`
  margin: 10px;
`;

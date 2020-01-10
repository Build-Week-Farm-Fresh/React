import React, { useState, useEffect } from "react"
import axiosWithAuth from '../../utils/axiosWithAuth'
import styled from "styled-components"
import {Link} from "react-router-dom"

export default function EditProduce(props) {

	const [produceToEdit, setProduceToEdit] = useState([])

	const [produceDetails, setProduceDetails] = useState({
		name: "", 
		price: "",
		quantity: "",
	})

	useEffect(() => {
		axiosWithAuth()
			.get(`/produce/${props.match.params.id}`)
			.then((result) => {
				setProduceDetails(result.data)
				setProduceToEdit(result.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [props.match.params.id])

	const handleChange = (event) => {
		setProduceDetails({
			...produceDetails,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		axiosWithAuth()
			.put(`/produce/${produceDetails.id}`, produceDetails)
			.then((result) => {

				props.history.push("/myproduce")
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<EditPage>
			<Link to="/myproduce">
				<p>Back to Produce List</p>
			</Link>
			<h2>Update {produceToEdit.name}</h2>
			<p>Current Price: ${produceToEdit.price}</p>
			<p>Current Quantity Available: {produceToEdit.quantity}</p>

				<EditCard onSubmit={handleSubmit}>
					<Edit
						type="text"
						name="name"
						placeholder="Update Produce Name"
						value={produceDetails.name}
						onChange={handleChange}
					/>
					<Edit
						type="text"
						name="price"
						placeholder="Update Price"
						value={produceDetails.price}
						onChange={handleChange}
					/>
					<Edit
						type="text"
						name="quantity"
						placeholder="Update Quantity"
						value={produceDetails.quantity}
						onChange={handleChange}
					/>

					<button type="submit">Save Changes</button>
				</EditCard>
		</EditPage>
	)
}

const EditPage = styled.div`
	width: 100%
`

const Edit = styled.input`
	display: flex;
	flex-direction: column;
	width: 400px;
	text-align: center;
	margin: 15px auto;
`

const EditCard = styled.form`
	width: 100%;
`
import React, { useState, useEffect } from "react"
import axiosWithAuth from '../../utils/AxiosWithAuth';

export default function EditProduce(props) {
	const [produceDetails, setProduceDetails] = useState({
		name: "",
		price: null,
		quantity: null,
	})

	useEffect(() => {
		axiosWithAuth()
			.get(`/produce/${props.match.params.id}`)
			.then((result) => {
				setProduceDetails(result.data)
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
		<>
			<h1>Update Produce</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Update Produce Name"
					value={produceDetails.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="price"
					placeholder="Update Price"
					value={produceDetails.price}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="quantity"
					placeholder="Update Quantity"
					value={produceDetails.quantity}
					onChange={handleChange}
				/>

				<button type="submit">Save Changes</button>
			</form>
		</>
	)
}


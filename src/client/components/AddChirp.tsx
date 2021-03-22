import React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const AddChirps: React.FC<AddChirpsProps> = (props: AddChirpsProps) => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const addChirp = (async () => {
		try {
			const userRes = await fetch("/api/users/", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password })
			});
			const newUser = await userRes.json();

			const res = await fetch("/api/chirps/add", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userid: newUser.insertId, content: content }),
			});

			props.history.push('/');
		
		} catch (error) {
			console.log(error);
		}
	});


	return (
		<div className="container row justify-content-center align-items-center">
			<div className="chirpInput card border-primary col-md-8 p-3 mt-3">
				<div className="card-body ">
					<form
						className="form-group mb-0 p-3">
						<input className="form control" type="text" name="name" id="name-input" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
						<textarea className="form-control" name="message" id="message-input" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
						<div className="text-right pt-3">
							<input className="btn btn-primary" type="submit" value="Chirp It!" onClick={addChirp} />
						</div>
					</form>
				</div>
			</div>
		</div>

	);
};

interface AddChirpsProps extends RouteComponentProps{}

export default AddChirps;
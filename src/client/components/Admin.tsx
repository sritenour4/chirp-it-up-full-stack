import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { RouteComponentProps, Link } from "react-router-dom";

const Admin: React.FC<AdminProps> = (props: AdminProps) => {
	const history = useHistory()
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const deleteChirp = (async () => {
		try {
			await fetch(`/api/chirps/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			});
			history.push('/')
		} catch (error) {
			console.log(error);
		}
	})

	const editChirp = (async () => {
		try {
			const res = await fetch(`/api/chirps/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, message }),
			});

			const response = await res.json();
			history.push('/')
		} catch (error) {
			console.log(error);
		}
	});


	return (
		<div className="container row justify-content-center align-items-center">
			<div className="chirpInput card border-primary col-md-8 p-3 mt-3">
				<div className="card-body">
					<form
						className="form-group mb-0 p-3">
						<input className="form control" type="text" name="name" id="name-input" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
						<textarea className="form-control" name="message" id="message-input" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
						<div className="text-right pt-3">
							<Link to="/" className="card-link btn btn-primary ml-3">Back</Link>
							<input className="btn btn-primary ml-3" type="submit" value="Edit" onClick={editChirp} />
							<input className="btn btn-primary ml-3" type="submit" value="Delete" onClick={deleteChirp} />
						</div>
					</form>
				</div>
			</div>
		</div>

	);
};

interface AdminProps extends RouteComponentProps<{ id: string }> { }

export default Admin;
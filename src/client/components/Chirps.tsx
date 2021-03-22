import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddChirps from './AddChirp';


const Chirps = (props: ChirpsProps) => {
    const [chirps, setChirps] = useState<ChirpsState[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/api/chirps/');
                const data = await res.json();
                setChirps(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <main className="container">
            {chirps.map(chirp => (
                <div key={chirp.id} className="card m-3 bg-light">
                    <div className="card-body">
                        <h5 className="card-title">{chirp.name}</h5>
                        <p className="card-text">{chirp.content}</p>
                        <Link to={`/${chirp.id}/admin`} className="card-link"> Admin Options</Link>
                    </div>
                </div>
            ))}
            </main>
    );
};

interface ChirpsProps { }

interface ChirpsState {
    id: number,
    name: string,
    content: string,
    created_at: string
};

export default Chirps;
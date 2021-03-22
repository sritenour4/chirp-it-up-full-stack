import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <>
            <div className="row justify-content-md-center sticky-top">
                <div className="header col-md-12 p-2">
                    <h1 className="text-center m-2 mt-4 text-primary">Chirper</h1>
                    <div className="d-flex justify-content-around">
                    <Link className="btn btn-outline-primary mx-3" to="/">All Chirps</Link>
                    <Link className="btn btn-outline-primary mx-3" to="/add">Add Chirp</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
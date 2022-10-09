import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const header = { "Access-Control-Allow-Origin": '*' };
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("clicked")
        axios.post('https://632ade97713d41bc8e79757b.mockapi.io/crud',
            {
                name: name,
                email: email,
                header,
            })
            .then(() => { navigate('/read') })

    }

    return (
        <>
            <form>
                <div className='d-flex justify-content-between m-2'>
                    <h2>Create</h2>
                    <Link to="/read">
                        <button className='btn btn-info'>Show data</button>
                    </Link>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            </form>
        </>
    )
}

export default Create
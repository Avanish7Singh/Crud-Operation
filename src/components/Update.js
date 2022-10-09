import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setId(localStorage.getItem("id"));

    }, [])

     const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`https://632ade97713d41bc8e79757b.mockapi.io/crud/${id}`,
        {
            name: name,
            email: email,
        }
        ).then(() =>{
            navigate("/read");
        })
     }
    return (
        <>
            <form>
                <h2>Update</h2>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={ handleSubmit}
                >Update</button>
                <Link to="/read" >
                <button className='btn btn-info mx-3'>Back</button>
                </Link>
            </form>
        </>
    )
}

export default Update
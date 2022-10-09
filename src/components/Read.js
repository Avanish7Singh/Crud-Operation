import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([]);
  const [tableColor, setTableColor] = useState("");
  const getData = () => {
    axios('https://632ade97713d41bc8e79757b.mockapi.io/crud')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }
  
  const deleteHandle = (id) => {
    axios.delete(`https://632ade97713d41bc8e79757b.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
  }
  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  const changeColor =() =>{
    if(tableColor === ''){
      setTableColor("table-dark");
    }else{
      setTableColor("");
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" onClick={changeColor} />
      </div>
      <div className='d-flex justify-content-between m-2'>
        <h2>Read</h2>
        <Link to="/">
          <button className='btn btn-primary'>Create</button>
        </Link>
      </div>
      <table class={`table ${tableColor}` }>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to="/update">
                      <button className='btn btn-success' onClick={() => setLocalStorage(item.id, item.name, item.email)}>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => deleteHandle(item.id)}>Delete</button>

                  </td>

                </tr>
              )
            })
          }


        </tbody>
      </table>
    </>
  )
}

export default Read
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';



const ManageService = () => {
    const [manageService, setManageService] = useState([]);


    useEffect(() => {
        fetch('https://desolate-peak-20423.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setManageService(data);
                alert("Service deleted successfully")
            })
    }, [])

    const handleDelete = id =>
    {
       id && fetch(`https://desolate-peak-20423.herokuapp.com/services/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(error => console.log(error))
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="manageService">
                    <h1 className="text-center mb-5">Manage Service</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {manageService.map(service => {
                                return <tr>
                                    <td>{service.name}</td>
                                    <td>{service.desc}</td>
                                    <td>{service.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


};

export default ManageService;
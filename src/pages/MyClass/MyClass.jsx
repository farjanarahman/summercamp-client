//import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [classData, setClassData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClassData(data)
            })
    }, [user?.email])
    console.log(classData)
    return (
        <div>
            
            {
                classData.map(data =>
                    <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Total Inrolment: 0</h2>
                            <p><div className="badge badge-neutral">{data.status}</div></p>

                            <label htmlFor="my_modal_7" className="btn">Your Feedback</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold">Feedback</h3>
                                    <p className="py-4">{data?.feedback?.feedback || "feetback not found"}</p>
                                </div>

                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                            <Link to={`/dashboard/updateclass/${data._id}`}><button className='btn btn-neutral'>Update</button></Link>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyClass;
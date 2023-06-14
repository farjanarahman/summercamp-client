import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SelectItem = () => {
    const [selectClass, setSelectClass] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addtocart')

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSelectClass(data)
            })
    }, [])
    console.log(selectClass)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Price</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>

                    {selectClass.map((select, index) =>
                        <tr key={index + 1}>
                            <th></th>
                            <td><img className='rounded-xl w-16 h-16' src={select.imageUrl} alt="" /></td>
                            <td>{select.className}</td>
                            <td>{select.instructorName}</td>
                            <td>{select.instructorEmail}</td>
                            <td>{select.price}</td>
                            <td><Link to={`/dashboard/payment/${select._id}`} className='btn btn-warning'>Pay</Link></td>
                        </tr>)}
                    {/* instructorName
                    instructorEmail
                    className
                    availableSeat
                    price
                    status
                    imageUrl
                    enrolledStudent
                    enrolledStudent
                    uploadDate
                    payment
                    studentClassAdds
                    userEmail */}



                </tbody>
            </table>
        </div>
    );
};

export default SelectItem;
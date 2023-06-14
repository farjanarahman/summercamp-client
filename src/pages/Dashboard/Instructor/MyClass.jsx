import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClass = () => {

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = [] } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/instructor')
        return res.data;
    })



    // const handleUpdate = data => {
    //     fetch(`http://localhost:5000/instructor/${data._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: `${data.name} is an Admin now!`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }

    return (
        <div>
            <Helmet>
                <title>Summer Camp | My Class</title>
            </Helmet>
            <h2 className='text-4xl font-semibold text-center mb-6'>My Class</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Image</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            instructor.map((data, index) => <tr key={data._id}>

                                <td>
                                    {index + 1}
                                </td>
                                <td>{data.cls_name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-xl">
                                            <img src={data.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{data.available_seats}</td>
                                <td>{data.price}</td>
                                <td>
                                    {/* <button onClick={() => handleUpdate(data)} className="btn btn-ghost btn-md bg-yellow-600 text-white"><FaEdit></FaEdit></button> */}
                                    <Link to={`/updateClass/${data._id}`}>
                                        <button className="btn btn-ghost btn-md bg-yellow-600 text-white"><FaEdit></FaEdit></button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;
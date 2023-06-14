import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { FaEdit } from 'react-icons/fa';
import useAxios from '../../hooks/useAxios';


const ManageClass = () => {

    const [axiosSecure] = useAxios();
    const { data: instructor = [] } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/instructor')
        return res.data;
    })


    return (
        <div>
            <Helmet>
                <title>Summer Camp | Manage Classes</title>
            </Helmet>
            <h2 className='text-4xl font-semibold text-center mb-6'>Manage Classes</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
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
                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-xl">
                                            <img src={data.cls_image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{data.cls_name}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.available_seats}</td>
                                <td>{data.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-md bg-yellow-600 text-white"><FaEdit></FaEdit></button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;
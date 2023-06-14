import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCourse = () => {
    const [cart, refetch] = useCart();

    const handleDelete = data => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectcls/${data._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected course has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>Summer Camp | Selected Classes</title>
            </Helmet>
            <div>
                <h3 className='text-3xl font-semibold text-center mb-8'>Total Selected Class: {cart.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>Image</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((data, index) => <tr key={data._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>{data.Ins_name}</td>
                                <td>{data.course}</td>
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
                                    <button onClick={() => handleDelete(data)} className="btn btn-ghost btn-md bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${data._id}`}><button className="btn btn-accent">Pay</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCourse;
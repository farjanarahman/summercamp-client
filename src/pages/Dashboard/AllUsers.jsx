import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
// import useCart from '../../hooks/useCart';

const AllUsers = () => {

    // const [refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        // const res = await fetch('http://localhost:5000/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // const handleMakeInstructor = user => {
    //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    //                     title: `${user.name} is an Instructor now!`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }

    const handleDelete = user => {
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
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${user.name} user has been deleted`,
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
                <title>Bistro Boss | Manage Users</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center mb-8'>All Users: {users.length}</h2> 

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          users.map((user, index) => <tr key={user._id}>
                           <td>{index + 1}</td> 
                           <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.email}</td>

                            <td>
                                {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-md bg-orange-500 text-white"><FaUserShield></FaUserShield></button>}

                            { <button onClick={() => handleMakeInstructor(user)} className="btn btn-accent btn-md text-white ms-4"><FaUsers></FaUsers></button>}</td>

                            <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-md bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button></td> 
                          </tr>
                          )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
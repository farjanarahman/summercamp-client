// import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
// import useCart from '../../../hooks/useCart';


const AddCls = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // const [ refetch] = useCart();


    const onSubmit = data => {
        // console.log(data);

        if (data.email && user.email) {
            const saveClass = { name: data.name, email: data.email, image: data.image, cls_name: data.cls_name, cls_image: data.cls_image, available_seats: data.available_seats, price: data.price }
            fetch(`http://localhost:5000/instructor`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveClass)
            })
            .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch();
                        reset(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added a Class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please don not change logged email',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/addCls', { state: { from: location } })
                }
            })
        }
    };

return (
    <div className='w-full ps-8 my-12'>
        {/* <Helmet>
            <title>Summer Camp | Add Class</title>
        </Helmet> */}
        <h2 className='text-4xl font-semibold text-center'>Add A Class</h2>
        <div className="divider"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Class Name</span>
                </label>
                <input type="text" {...register("cls_name", { required: true })} placeholder="class name" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Class Image</span>
                </label>
                <input type="text" {...register("cls_image", { required: true })} placeholder="photoURL" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Name</span>
                </label>
                <input type="text" defaultValue={user.displayName} {...register("name", { required: true })} placeholder={user.displayName} className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Email</span>
                </label>
                <input type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder={user.email} className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Image</span>
                </label>
                <input type="text" defaultValue={user.photoURL} {...register("image", { required: true })} placeholder="photoURL" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Available seats</span>
                </label>
                <input type="text" {...register("available_seats", { required: true })} placeholder="available seats" className="input input-bordered" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text font-semibold">Price</span>
                </label>
                <input type="text" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
            </div>
            <button className="btn btn-accent mt-4 w-full">Add a class</button>
        </form>
    </div>
);
};

export default AddCls;

// defaultValue={user.displayName}
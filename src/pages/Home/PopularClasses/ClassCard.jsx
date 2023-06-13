import AuthContext from '../../../providers/AuthProvider'
import { useContext } from "react";
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
// import useCart from '../../hooks/useCart';


const ClassCard = ({ data }) => {
    const { _id, image, name, Ins_name, available_seats, price } = data;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = data => {
        console.log(data);
        if (user && user.email) {
            const selectedCls = { name: user.displayName ,email: user.email, courseId: _id, course: name, image, Ins_name, available_seats, price }
            fetch(`http://localhost:5000/selectcls`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCls)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch to update cart courses
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Selected the course',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div>
            <div className="card sm:w-fit bg-base-100 shadow-xl">
                <figure><img className='h-[230px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Instructor Name: {Ins_name}</p>
                    <p>Available seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleSelect(data)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
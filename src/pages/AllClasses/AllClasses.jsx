import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AllClasses = () => {
    const [feedback, setFeedback] = useState("")
    const [textAreaValue, setTextAreaValue] = useState("");
   
   

    const { data: allClassData = [], refetch } = useQuery(
        ["classes"],
        async () => {
            const res = await axios.get("http://localhost:5000/classes");
            return res.data;
        }
    );
    //console.log(allClassData)

    const approveHandler = (id) => {
        console.log(id)
        axios
            .patch(`http://localhost:5000/class/approve/${id}`)
            .then((response) => {
                if (response.status === 200) {

                    //alert("Class approve Confirmed !");
                    Swal.fire({
                        title: 'Class Approved Confirmed',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                }
            })
    }
    const denyHandler = (id) => {
        console.log(id)
        axios
            .patch(`http://localhost:5000/class/deny/${id}`)
            .then((response) => {
                if (response.status === 200) {

                    //alert("Class denied Confirmed !");
                    Swal.fire({
                        title: 'Class Denied Confirmed',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                }
            })
    }
    const onChangeHandler=()=>{
        //console.log(textAreaValue);
        const info={feedback:textAreaValue}
        fetch(`http://localhost:5000/feedback/${feedback}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)

        })
        .then(res=>res.json())
            .then(data=>{
                console.log(data)
                console.log(info)
            })
    }
    const content = <>
        {/* <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Feedback</h3>
                   
                    <div>
                       <textarea onClick={(e)=>setTextAreaValue(e.target.value)} className='border w-full' rows="5"></textarea>
                       <div className='flex justify-between'>
                        <button  className="btn btn-success">Submit Feedback</button>
                        <button className="btn btn-error">Denied</button>
                       </div>
                    </div>
                </form>
            </dialog> */}
        <div className="modal" id="my_modal_8">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <div>
                    <textarea onChange={(e) => setTextAreaValue(e.target.value)} className='border w-full' rows="5"></textarea>
                    <div className='flex justify-center'>
                        <button onClick={onChangeHandler} className="btn btn-success">Submit Feedback</button>
                        
                    </div>
                </div>
                <div className="modal-action">
                    <a href="#" className="btn">Close</a>
                </div>
            </div>
        </div>
    </>

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Class name</th>
                        <th>price</th>
                        <th>Instructor Name</th>
                        <th>Available Seat</th>
                        <th>Action</th>
                        <th>Denied</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {allClassData.map(singleData=><p>1</p>)} */}
                    {allClassData.map((singleData, index) =>
                        <tr key={singleData._id}>
                            <th>{index + 1}</th>
                            <td><img className='w-14 h-14 rounded-lg' src={singleData.image}></img></td>
                            <td>{singleData.name}</td>
                            <td>{singleData.price}</td>
                            <td>{singleData.instructor}</td>
                            <td>{singleData.available}</td>
                            <td><button onClick={() => approveHandler(singleData._id)} className="btn btn-success">Approved</button></td>
                            <td><button onClick={() => denyHandler(singleData._id)} className="btn btn-error">Denied</button></td>
                            <td ><button className="btn"><a onClick={() => setFeedback(singleData._id)} href="#my_modal_8" className="btn">Feedback</a></button></td>
                        </tr>)}


                </tbody>

            </table>
            {content}
        </div>
    );
};

export default AllClasses;
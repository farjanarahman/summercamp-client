import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateClass = () => {
    const {id} = useParams();
    const [initialData,setInitialData]=useState({});
    // const {id}=useLoaderData();
    // console.log(id);
    useEffect(() =>{
        fetch(`https://sportify-neon.vercel.app//singleclass/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setInitialData(data);
        })
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useContext(AuthContext);
    const onSubmit = data => {
        
        //console.log(data)
        fetch(`https://sportify-neon.vercel.app//classes/${id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div >
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 me-4">
                
                <div className = "form-control">
                
                    <input
                        className = "input input-bordered"
                        {...register("name")}
                        placeholder = "Class Name"
                        defaultValue = {initialData.name}
                    />
                </div>
                
                <div className = "form-control">
                    
                    <input
                        className = "input input-bordered"
                        {...register("image")}
                        placeholder = "Image Link"
                        type = "url"
                        defaultValue = {initialData.image}

                    />
                </div>
                <input
                        className = "input input-bordered"
                        {...register("instructor")}
                        placeholder="Instructor Name"
                        value = {user?.displayName}

                    />
                    <div className = "form-control">
                
                <input
                    className = "input input-bordered"
                    
                    {...register("email")}
                    placeholder = "Instructor email"
                    value = {user?.email}
                    type = "email"
                />

            </div>

                <div className = "form-control">
                
                    <input
                        className = "input input-bordered"
                        
                        {...register("price")}
                        placeholder = "Price"
                        type = "number"
                        defaultValue = {initialData.price}
                    />

                </div>
                <div className = "form-control">
                    <input
                        className = "input input-bordered"
                        {...register("available")}
                        placeholder = "available Seat" 
                        type="number"
                        defaultValue={initialData.available}
                    />
                </div>
                <div className ="form-control">
                    <input
                        className="input input-bordered"
                        {...register("status")}
                        placeholder="Status" 
                        value={"pending"}
                        type="text"
                        hidden
                    />
                </div>

            </div>
            <div className="form-control mt-6">
                <input className="btn btn-neutral  mx-auto" value="Update a Class" type="submit" />
            </div>
        </form>
    </div>
    );
};

export default UpdateClass;
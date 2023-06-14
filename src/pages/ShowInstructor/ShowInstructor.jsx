import React, { useEffect, useState } from 'react';
import InstructorCard from '../InstructorCard/InstructorCard';

const ShowInstructor = () => {
    const [instructor,setInstructor] =useState([])
    useEffect(()=>{
        fetch('https://sportify-neon.vercel.app//usersrole')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setInstructor(data)
        })
    },[])
    return (
       <div>
        <h1 className='text-center text-6xl text-blue-400 mt-2'>Instructor</h1>
        <hr className='w-1/3 mx-auto mt-4 bg-blue-400'/>
         <div className='grid lg:grid-cols-3 gap-4 mt-5'>
            {instructor.map(instruct=><InstructorCard key={instruct._id} instruct={instruct}></InstructorCard>)}
        </div>
       </div>
    );
};

export default ShowInstructor;
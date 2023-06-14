import { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect( () => {
        fetch('https://sportify-neon.vercel.app//instructor')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])

    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center font-semibold mb-4'>---Top Instructors---</h2>
            <div className="divider"></div>
            <div className='grid md:grid-cols-2 gap-5 mt-8'>
                {
                    instructors.map(instructor => <InstructorCard 
                        key={instructor._id}
                        instructor={instructor}
                        ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
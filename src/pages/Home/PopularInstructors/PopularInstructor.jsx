import { useEffect, useState } from 'react';
import InsCard from '../Home/InsCard';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])

    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center font-semibold mb-4'>---Top Instructors---</h2>
            <div className="divider"></div>
            <div className='grid md:grid-cols-2 gap-5 mt-8'>
                {
                    instructors.map(instructor => <InsCard 
                        key={instructor._id}
                        instructor={instructor}
                        ></InsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
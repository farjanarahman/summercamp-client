import { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect( () => {
        fetch('https://sportify-neon.vercel.app//classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center font-semibold mb-4'>---Popular Classes---</h2>
            <div className="divider"></div> 
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    classes.map(data => <ClassCard 
                        key={data._id}
                        data={data}
                        ></ClassCard>)
                }
            </div>
            {/* // <p>Fine-art photography</p>
            // <p>Landscape photography</p>
            // <p>Fashion photography</p>
            // <p>Time-lapse photography</p>
            // <p>Architectural photography</p>
            // <p>Abstract photography</p>
            // <p>Macro photography</p> */}
        </div>
    );
};

export default PopularClasses;
import { useEffect, useState } from 'react';

const PopularClasses2 = () => {
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('https://sportify-neon.vercel.app//popularClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPopularClass(data)
            })
    }, [])
    return (

        <div>
       <h2 className='text-4xl text-center font-semibold mb-4 text-orange-600'>---Popular Classes---</h2>
        <hr className="w-1/3 mx-auto mt-4 bg-blue-400" />
        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          {popularClass.map(popular => (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-64 w-full" src={popular.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{popular.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default PopularClasses2;
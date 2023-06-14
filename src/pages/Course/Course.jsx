import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const nCourse={_id,name,instructor,price,image,available}=course;
    console.log(nCourse);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">name</h2>
                  {/* <p>{cl.instructor}</p>
                  <p>{cl.price}</p>
                  <p>{cl.available}</p> */}
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Read More</button> */}
                    <Link to={`singleclass/${_id}`}>
                        <button className="btn btn-neutral">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
    );
};

export default Course;
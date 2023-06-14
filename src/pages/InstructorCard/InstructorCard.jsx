import React from 'react';

const InstructorCard = ({ instruct }) => {
    const {name,image,email,number}=instruct;
    return (
       <div>
        
         <div className="card w-96 bg-base-100 shadow-xl ms-2">
            <figure><img className='w-full h-56' src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
       </div>
    );
};

export default InstructorCard;
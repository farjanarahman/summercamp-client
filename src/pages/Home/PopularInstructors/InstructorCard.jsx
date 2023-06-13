const InstructorCard = ({ instructor }) => {
    const { name, image, email } = instructor;
    // if (instructor.length > 6) {
    //   // Some logic here if needed
    // }
  
    return (
      <div>
        <div className="card card-side w-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-[220px] h-[200px]" src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{email}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See Classes</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InstructorCard;
  
// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const Slider = () => {
//     return (
//             <Carousel>
//                 <div>
//                     <img src="https://i.ibb.co/vkYgw4N/football.jpg"/>
//                 </div>
//                 <div>
//                     <img src="https://i.ibb.co/tHhjy3J/running.png"/>
//                 </div>
//                 <div>
//                     <img src="https://i.ibb.co/7gZXh0R/basketball.jpg"/>
//                 </div>
//                 <div>
//                     <img src="https://i.ibb.co/3BrfZXv/basketball2.jpg"/>
//                 </div>
//                 <div>
//                     <img src="https://i.ibb.co/rZC3ckY/badminton.jpg"/>
//                 </div>

//             </Carousel>
//     );
// };

// export default Slider;

// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

// const Slider = () => {
//   return (
//     <Carousel className='h-16'>
//       <div>
//         <img
//           src="https://i.ibb.co/vkYgw4N/football.jpg"
//         //   style={{ width: '100%', height: 'auto' }}
//           alt="Football"
//         //   className='h-52'
//         />
//       </div>
//       <div>
//         <img
//           src="https://i.ibb.co/tHhjy3J/running.png"
//         //   style={{ width: '100%', height: 'auto' }}
//           alt="Running"
//         //   className='h-52'
//         />
//       </div>
//       <div>
//         <img
//           src="https://i.ibb.co/7gZXh0R/basketball.jpg"
//         //   style={{ width: '100%', height: 'auto' }}
//           alt="Basketball"
//         //   className='h-52'
//         />
//       </div>
//       <div>
//         <img
//           src="https://i.ibb.co/3BrfZXv/basketball2.jpg"
//         //   style={{ width: '100%', height: 'auto' }}
//           alt="Basketball"
//         //   className='h-52'
//         />
//       </div>
//       <div>
//         <img
//           src="https://i.ibb.co/rZC3ckY/badminton.jpg"
//         //   style={{ width: '100%', height: 'auto' }}
//           alt="Badminton"
//         //   className='h-52'
//         />
//       </div>
//     </Carousel>
//   );
// };

// export default Slider;



import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

const Slider = () => {
  return (
    <div className="top-slider">
      <Carousel className="carousel-container">
        <div className="image-overlay">
          <img src="https://i.ibb.co/vkYgw4N/football.jpg" alt="Football" className="carousel-image" />
          <div className="overlay">
            <h2 className="carousel-title font-extrabold text-4xl">Welcome to <br /> <span className='text-orange-600 font-extrabold'>Sportify</span></h2>
            <p className='mt-5 w-3/5 font-medium'>Sportify is a renowned sports academy dedicated to nurturing young talent and promoting sports excellence.</p>
          </div>
        </div>

        <div>
          <img src="https://i.ibb.co/tHhjy3J/running.png" alt="Running" className="carousel-image" />
          {/* <div className="carousel-caption">
            <p className="carousel-description font-medium px-3 text-black">Experience the Thrill of Running</p>
          </div> */}
        </div>
        <div>
          <img
            src="https://i.ibb.co/7gZXh0R/basketball.jpg"
            alt="Basketball"
            className="carousel-image"
          />
          {/* <div className="carousel-caption">
            <p className="carousel-description font-medium px-3 text-black">Unleash your potential and redefine athletic excellence</p>
          </div> */}
        </div>
        <div>
          <img
            src="https://i.ibb.co/rZC3ckY/badminton.jpg"
            alt="Badminton"
            className="carousel-image"
          />
          {/* <div className="carousel-caption">
            <p className="carousel-description font-medium px-3 text-black">Sportify provides the ideal platform for growth, teamwork, and a lifelong love for sports.</p>
          </div> */}
        </div>
        <div>
          <img
            src="https://i.ibb.co/3BrfZXv/basketball2.jpg"
            alt="Basketball"
            className="carousel-image"
          />
          {/* <div className="carousel-caption">
            <p className="carousel-description font-medium px-3 text-black">Sportify provides the ideal platform for growth, teamwork, and a lifelong love for sports.</p>
          </div> */}
        </div>
        
      </Carousel>
    </div>
  );
};

export default Slider;





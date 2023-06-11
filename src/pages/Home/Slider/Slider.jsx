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



// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

// const Slider = () => {
//   return (
//     <div className="carousel-container" style={{ height: '200px' }}>
//       <Carousel>
//         <div>
//           <img
//             src="https://i.ibb.co/vkYgw4N/football.jpg"
//             alt="Football"
//             className="carousel-image"
//           />
//         </div>
//         <div>
//           <img
//             src="https://i.ibb.co/tHhjy3J/running.png"
//             alt="Running"
//             className="carousel-image"
//           />
//         </div>
//         <div>
//           <img
//             src="https://i.ibb.co/7gZXh0R/basketball.jpg"
//             alt="Basketball"
//             className="carousel-image"
//           />
//         </div>
//         <div>
//           <img
//             src="https://i.ibb.co/3BrfZXv/basketball2.jpg"
//             alt="Basketball"
//             className="carousel-image"
//           />
//         </div>
//         <div>
//           <img
//             src="https://i.ibb.co/rZC3ckY/badminton.jpg"
//             alt="Badminton"
//             className="carousel-image"
//           />
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;

// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

// const Slider = () => {
//   return (
//     <div className="banner-container">
//       <div className="banner-overlay">
//         <h1 className="banner-title">Website Name</h1>
//         <p className="banner-description">Welcome to our website. Learn more about us.</p>
//       </div>
//       <Carousel className="carousel-container">
//         <div>
//           <img src="https://i.ibb.co/vkYgw4N/football.jpg" alt="Football" className="carousel-image" />
//         </div>
//         <div>
//           <img src="https://i.ibb.co/tHhjy3J/running.png" alt="Running" className="carousel-image" />
//         </div>
//         {/* Add more carousel slides/images as needed */}
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;


import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

const Slider = () => {
  return (
    <div className="top-slider">
      <Carousel className="carousel-container">
        <div>
          <img src="https://i.ibb.co/vkYgw4N/football.jpg" alt="Football" className="carousel-image" />
          <div className="carousel-caption">
            <h2 className="carousel-title">Welcome to Our Website</h2>
            <p className="carousel-description">Discover the latest news and updates</p>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/tHhjy3J/running.png" alt="Running" className="carousel-image" />
          <div className="carousel-caption">
            <h2 className="carousel-title">Experience the Thrill of Running</h2>
            <p className="carousel-description">Join us for exciting running events</p>
          </div>
        </div>
        {/* Add more carousel slides/images with captions as needed */}
      </Carousel>
    </div>
  );
};

export default Slider;





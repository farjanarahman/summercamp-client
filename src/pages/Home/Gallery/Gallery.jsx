// import React, { useState } from 'react';
// import './Gallery.css';

// const Gallery = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openLightbox = (image) => {
//     setSelectedImage(image);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="gallery-section">
//       <h2>Photo Gallery</h2>
//       <div className="thumbnail-grid">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             className="thumbnail"
//             onClick={() => openLightbox(image)}
//           />
//         ))}
//       </div>

//       {selectedImage && (
//         <div className="lightbox" onClick={closeLightbox}>
//           <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
import React from 'react';
import Gallery from './Gallery';

const App = () => {
  const images = [
    { src: 'https://i.ibb.co/bByg32G/Robot-7.jpg', alt: 'Image 1' },
    { src: 'https://i.ibb.co/027zMr1/Robot-7-removebg-preview.png', alt: 'Image 2' },
    // Add more images as needed
  ];

  return (
    <div>
      <h1>My Website</h1>
      <Gallery images={images} />
    </div>
  );
};

export default App;

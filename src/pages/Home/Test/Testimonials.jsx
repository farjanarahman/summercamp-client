import React from 'react';
import Testimonials from './Testimonials';

const App = () => {
  const testimonials = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe"
    },
    {
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Smith"
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h1>My Website</h1>
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default App;

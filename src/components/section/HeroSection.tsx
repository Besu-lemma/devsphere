import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="h-screen w-full overflow-auto flex items-center justify-center text-white text-4xl font-bold"
      style={{ 
        backgroundImage: 'url("/back.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // This makes the background move with the scroll
      }}
    >
      Share Ur Blogs
    </section>
  );
};

export default HeroSection;

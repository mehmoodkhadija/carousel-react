import React, { useState } from 'react';

const Carousel = () => {
  const [image, setImage] = useState(0);

  const handleNext = () => {
    setImage((s) => (s + 1) % images.length);
  };

  const handlePrev = () => {
    setImage((s) =>
      s === 0 ? images.length - 1 : s - 1
    );
  };

  const images = [
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-chicken-n-chips-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/87744c30-838c-11ee-bd5c-fdea184aed0c-Sweet-Thai-Chilli-Wings-500x500(2)_desktop_image-2023-11-15075648.jpg",
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png"
  ];

  return (
    <div>
      <img src={images[image]} alt= 'loading' />

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;

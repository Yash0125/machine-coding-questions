import React, { useEffect, useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUeZQS6V7xRUTn6EuH90qR41FMgBycCF5vA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjmUyRahAl-j_OOJFpM8jl2wbyQ0z7SI_0w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzUDaFSvSJo29J51TV0yAO3jmLbGYp_cT3Q&usqp=CAU",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setplaying] = useState(false);

  useEffect(() => {
    let interval;

    if (playing) {
      interval = setInterval(() => {
        setCurrentIndex((pre) => (pre + 1) % images.length);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [playing, images]);

  const previouImg = () => {
    setCurrentIndex((pre) => (pre - 1 + images.length) % images.length);
  };

  const nextImg = () => {
    setCurrentIndex((pre) => (pre + 1) % images.length);
  };
  return (
    <div className="container">
    <h1>Image Carousel</h1>
      <img src={images[currentIndex]} alt="" image />
      <br />
      <button onClick={previouImg}>pre</button>
      <button onClick={() => setplaying((pre) => !pre)}>
        {!playing ? "play" : "pause"}
      </button>
      <button onClick={nextImg}>next</button>
    </div>
  );
};

export default Carousel;

import React, { useState } from "react";

import styles from "../styles/Carousel.module.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow_prev} onClick={goToPrevSlide}>
        {"<"}
      </button>
      <img className={styles.slide} src={images[currentIndex]} alt="Imagem" />
      <button className={styles.arrow_next} onClick={goToNextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;

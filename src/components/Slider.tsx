import { useState } from "react";
import "../styles/component/slider.scss";

const Slider = ({ slides }: { slides: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides?.length) % slides?.length
    );
  };

  return (
    <>
      <div className="slider-container">
        <button onClick={goToPrevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="slide">
          <img src={slides?.[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <button onClick={goToNextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="indicators">
        {slides.map((_slide, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Slider;

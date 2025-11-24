import { useEffect, useState } from 'react';

const carouselTexts = [
  'Crypto Taxes: Solved',
  'Crypto Taxes: Made Simple',
  'Crypto Taxes: Fully Defensible'
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
        display: 'inline-block'
      }}
    >
      {carouselTexts[currentIndex]}
    </span>
  );
}


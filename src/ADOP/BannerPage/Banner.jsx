import {gsap} from "gsap";
import React from "react";
import TextPart from '../BannerPage/TextPart'
import "./Banner.css"
export default function Banner(){
  const containerRef = React.useRef();
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  const videos = [
    "videos/hero-1.mp4",
    "videos/hero-2.mp4",
    "videos/hero-3.mp4",
    "videos/hero-4.mp4",
  ];

  React.useEffect(() => {
    const slideToVideo = (index) => {
      const offset = -(index * 100); 
      gsap.to(containerRef.current, {
        x: `${offset}vw`,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setCurrentVideoIndex(index),
      });
    };

    const interval = setInterval(() => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      slideToVideo(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentVideoIndex]);

  const handleDotClick = (index) => {
    const offset = -(index * 100);
    gsap.to(containerRef.current, {
      x: `${offset}vw`,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => setCurrentVideoIndex(index),
    });
  };

  return (
    
    <div className="video-slider">
       <h4 className="bannerText-logo">AdoptLy</h4>
       <p className="bannerText">"Congratulations !! <br/> on your future happiness."</p>
      <div ref={containerRef} className="video-container">
        {videos.map((src, index) => (
          <div key={index} className="video-slide">
            <video
              src={src}
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="overlay" />
          </div>
        ))}
      </div>

      <div className="navigation">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentVideoIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
       
      </div>
      {/* <TextPart/> */}
    </div>
   
  );
};

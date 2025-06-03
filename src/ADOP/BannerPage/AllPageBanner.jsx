import React, { useEffect } from 'react';
import '../BannerPage/AllPageBanner.css';
import gsap from 'gsap/all';

const AllPageBanner = () => {
  useEffect(() => {
   
    const animateText = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const letters = element.innerText.split('').map((letter, index) => (
          `<span class="letter" style="display:inline-block">${letter === ' ' ? '&nbsp;' : letter}</span>`
        ));
        element.innerHTML = letters.join('');
        gsap.from(`${selector} .letter`, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05, 
        });
      }
    };

    animateText('.banner-text');
    animateText('.banner-textt');
  }, []);

  return (
    <div>
      <div className="AllPageBannerImg">
      <img src="/Banner.png" alt="Banner" />

      </div>
      <h3 className="banner-text">
        "Adopting a pet isn't just about  &nbsp;<br />
         bringing home an animal"
      </h3>
      <h3 className="banner-textt">
        "It's about giving them a second chance <br />
        at life and receiving endless love in return."
      </h3>
    </div>
  );
};

export default AllPageBanner;

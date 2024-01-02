import React, { useState, useEffect } from 'react';

function Carrucel() {
  const [nextDom, setNextDom] = useState(null);
  const [prevDom, setPrevDom] = useState(null);
  const [carouselDom, setCarouselDom] = useState(null);
  const [sliderDom, setSliderDom] = useState(null);
  const [thumbnailBorderDom, setThumbnailBorderDom] = useState(null);
  const [thumbnailItemsDom, setThumbnailItemsDom] = useState([]);
  //velocidad de desplazamiento de imagenes automaticas y manualmente
  const [timeRunning, setTimeRunning] = useState(3000);
  const [timeAutoNext, setTimeAutoNext] = useState(10000);

  useEffect(() => {
    // step 1: get DOM
    setNextDom(document.getElementById('next'));
    setPrevDom(document.getElementById('prev'));
    setCarouselDom(document.querySelector('.carousel'));
    setSliderDom(document.querySelector('.carousel .list'));
    setThumbnailBorderDom(document.querySelector('.carousel .thumbnail'));
    setThumbnailItemsDom(document.querySelectorAll('.carousel .thumbnail .item'));
  }, []);

  useEffect(() => {
    if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }
  }, [thumbnailBorderDom, thumbnailItemsDom]);

  useEffect(() => {
    if (nextDom) {
      nextDom.addEventListener('click', () => showSlider('next'));
    }
    if (prevDom) {
      prevDom.addEventListener('click', () => showSlider('prev'));
    }

    return () => {
      // Cleanup event listeners on component unmount
      if (nextDom) {
        nextDom.removeEventListener('click', () => showSlider('next'));
      }
      if (prevDom) {
        prevDom.removeEventListener('click', () => showSlider('prev'));
      }
    };
  }, [nextDom, prevDom]);

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      if (nextDom) {
        nextDom.click();
      }
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
    };
  }, [nextDom, timeAutoNext]);

  function showSlider(type) {
    let runTimeOut = null; // Declarar e inicializar runTimeOut
    let runNextAuto = null; // Declarar e inicializar runNextAuto
  
    if (sliderDom) {
      const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
  
      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
  
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);
  
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        if (nextDom) {
          nextDom.click();
        }
      }, timeAutoNext);
    }
  }
  
}

export default Carrucel;

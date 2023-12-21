"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/indexscroll.css'
import Indexscrollholder from './Indexscrollholder'

const Indextext = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const narutoimages = [
    '/Images/Naruto/1.jpg',
    '/Images/Naruto/2.jpg',
    '/Images/Naruto/3.jpg',
    '/Images/Naruto/4.jpg',
    '/Images/Naruto/5.jpg',
    '/Images/Naruto/6.jpg',
  ];

  const AOTimages = [
    '/Images/AOT/1.jpg',
    '/Images/AOT/2.jpg',
    '/Images/AOT/3.jpg',
    '/Images/AOT/4.jpg',
    '/Images/AOT/5.jpg',
    '/Images/AOT/6.jpg',
  ];

  const OPimages = [
    '/Images/OP/1.jpg',
    '/Images/OP/2.jpg',
    '/Images/OP/3.jpg',
    '/Images/OP/4.jpg',
    '/Images/OP/5.jpg',
    '/Images/OP/6.jpg',
  ];

  const HHimages = [
    '/Images/HH/1.jpg',
    '/Images/HH/2.jpg',
    '/Images/HH/3.jpg',
    '/Images/HH/4.jpg',
    '/Images/HH/5.jpg',
    '/Images/HH/6.jpg',
  ];

  const DSimages = [
    '/Images/DS/1.jpg',
    '/Images/DS/2.jpg',
    '/Images/DS/3.jpg',
    '/Images/DS/4.jpg',
    '/Images/DS/5.jpg',
    '/Images/DS/6.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % narutoimages.length);
      }, 1000);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);


  // Horizontal Scroller 
  const containerRef = useRef(null); // useRef is used to target scroll bar

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 800;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;

      // Check if at the end
      if (containerRef.current.scrollLeft >= maxScrollLeft) {
        // Reset to the beginning
        containerRef.current.scrollLeft = 0;
      } else {
        // Otherwise, continue scrolling
        containerRef.current.scrollLeft += 800;
      }
    }
  };

  const duplicate = () => {
    const children = containerRef.current?.children;
    const childrenArray = Array.from(children || []);

    // console.log(childrenArray);

    for (let i = 0; i < 5; i++) {
      childrenArray.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        containerRef.current.appendChild(duplicatedItem);
      });
    }

    // const duplicatedChildren = Array.from(containerRef.current?.children || []);
    // console.log("Duplicated Children:", duplicatedChildren);
  }

  useEffect(() => {
    const scrollRightInterval = setInterval(() => {
      handleScrollRight();
    }, 10000);
    duplicate();

    return () => {
      clearInterval(scrollRightInterval);
    };


  }, []);


  // useEffect(() => {
  //   console.clear();
  // }, []);

  return (
    <div className='ani-con'>
      <div className='animeHome mb-8' ref={containerRef} id='animeHome'>
        {/* Naruto */}
        <Indexscrollholder
          animeID='naruto'
          heading='Naruto'
          desc="Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the"
          linkPath={20}
          imgPath='Naruto/3'
        />

        {/* Attack On Titan */}
        <Indexscrollholder
          animeID='AOT'
          heading='Attack On Titan'
          h1head='text-[4rem]'
          desc="Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste"
          linkPath={16498}
          imgPath='AOT/6'
        />

        {/* One Piece */}
        <Indexscrollholder
          animeID='OP'
          heading='One Piece'
          desc="Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated"
          linkPath={21}
          imgPath='OP/3'
        />

        {/* Demon Slayer */}
        <Indexscrollholder
          animeID='DS'
          heading='Demon Slayer'
          h1head='text-[4rem]'
          desc="Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy"
          linkPath={38000}
          imgPath='DS/2'
        />

        {/* Hunter X Hunter */}
        <Indexscrollholder
          animeID='HH'
          heading='Hunter X Hunter'
          h1head='text-[3.8rem]'
          desc="Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk"
          linkPath={11061}
          imgPath='HH/8'
        />
      </div>

      <button className='scroll-btn' id='scrollRight' onClick={handleScrollRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>

      <button className='scroll-btn' id='scrollLeft' onClick={handleScrollLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </button>
    </div>
  )
}

export default Indextext

"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/indexscroll.css'

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
        <div className='animeItem flex items-center justify-between' id='naruto'>
          <div className="texts text-white z-10 px-8 pt-40">
            <h1 className='mt-16'>Naruto</h1>
            <h2 className='w-5/6'>Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the ...</h2>
            <button className='bg-zinc-100 text-black px-12 py-2 mt-8 rounded-full'>
              <Link href='./20'>Details</Link>
            </button>
          </div>
          <div className="indexImgContainer flex justify-end mr-20">
            <Image
              src='/Images/Naruto/3.jpg'
              width="1920"
              height="200"
              className='index-img'>
            </Image>
          </div>
        </div>

        {/* Attack On Titan */}
        <div className='animeItem flex items-center justify-between' id='AOT'>
          <div className="texts text-white z-10 px-8 pt-40">
            <h1 className='mt-16' id='aot-head'>Attack On Titan</h1>
            <h2 className='w-5/6'>Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste ...</h2>
            <button className='bg-zinc-100 text-black px-12 py-2 mt-8 rounded-full'>
              <Link href='./16498'>Details</Link>
            </button>
          </div>
          <div className="indexImgContainer flex justify-end mr-20">
            <Image
              src='/Images/AOT/6.jpg'
              width="1920"
              height="200"
              className='index-img'>
            </Image>
          </div>
        </div>

        {/* One Piece */}
        <div className='animeItem flex items-center justify-between' id='OP'>
          <div className="texts text-white z-10 px-8 pt-40">
            <h1 className='mt-16'>One Piece</h1>
            <h2 className='w-5/6'>Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated...</h2>
            <button className='bg-zinc-100 text-black px-12 py-2 mt-8 rounded-full'>
            <Link href='./21'>Details</Link>
            </button>
          </div>
          <div className="indexImgContainer flex justify-end mr-20">
            <Image
              src='/Images/OP/3.jpg'
              width="1920"
              height="200"
              className='index-img'>
            </Image>
          </div>
        </div>

        {/* Demon Slayer */}
        <div className='animeItem flex items-center justify-between' id='DS'>
          <div className="texts text-white z-10 px-8 pt-40">
            <h1 className='mt-16' id='ds-head'>Demon Slayer</h1>
            <h2 className='w-5/6'>Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy ...</h2>
            <button className='bg-zinc-100 text-black px-12 py-2 mt-8 rounded-full'>
              <Link href='./38000'>Details</Link>
            </button>
          </div>
          <div className="indexImgContainer flex justify-end mr-20">
            <Image
              src='/Images/DS/2.jpg'
              width="1920"
              height="200"
              className='index-img'>
            </Image>
          </div>
        </div>


        {/* Hunter X Hunter */}
        <div className='animeItem flex items-center justify-between' id='HH'>
          <div className="texts text-white z-10 px-8 pt-40">
            <h1 className='mt-16' id='hh-head'>Hunter X Hunter</h1>
            <h2 className='w-5/6'>Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk...</h2>
            <button className='bg-zinc-100 text-black px-12 py-2 mt-8 rounded-full'>
              <Link href='./11061'>Details</Link>
            </button>
          </div>
          <div className="indexImgContainer flex justify-end mr-20">
            <Image
              src='/Images/HH/8.jpg'
              width="1920"
              height="200"
              className='index-img'>
            </Image>
          </div>
        </div>
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

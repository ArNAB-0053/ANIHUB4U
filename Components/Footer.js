"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import '../styles/footer.css'
import '../styles/copylink.css'
import '../styles/footerhoverani.css'
import '../app/globals.css'

import {
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'

import {
  LineShareButton,
  LineIcon,
} from 'next-share'

import {
  TelegramShareButton,
  TelegramIcon,
} from 'next-share'

import {
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'

const Footer = () => {
  // Copying my website link into clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText('https://anihub-4-u.vercel.app/');
  };



  // const [drawerclose, setDrawerclose] = useState(false)
  const [isBlur, setisBlur] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const aboutPageHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setAboutOpen(true);
    setisBlur(true);
    // setDrawerclose(false); // Reset drawerclose state
  }

  const contactPageHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setContactOpen(true);
    setisBlur(true);
    // setDrawerclose(false); // Reset drawerclose state
  }

  // const handleCloseDrawer = () => {
  //   setDrawerclose(true);
  //   setisBlur(false);
  //   setDraweropen(false); // Reset draweropen state
  // }

  return (
    <>
      {/* <div className="footerline"></div> */}
      <div id='footerCon' className=' px-[4.8rem] py-4 mt-16 flex justify-between items-start'>
        <div>
          <div className="footerimg flex items-center justify-start">
            <Image
              src='/Images/logo.png'
              width="1920"
              height="200"
              id='footerLogo'
              className='footerlogo w-24'>
            </Image>
            <div className="bg-zinc-600 h-12 mx-8" id='verticalLine'></div>
            <div className="text flex items-start justify-center flex-col">
              <p className='text-zinc-500 text-sm'>Copyright &copy; 2023 AniHub4u. All Rights Reserved </p>
              <p className='text-zinc-600 mt-[-2px] text-[12px]'>Made with ❤️ for Anime lovers</p>
            </div>
          </div>
          <div className="my-4 bg-[#535353] dark:bg-zinc-600" id="hline"></div>
          <div className="footerContainer flex items-end justify-start gap-x-10 text-zinc-500">
            <div className="basic flex flex-col gap-2">
              <button id='aboutbtn' className='w-28 h-10 border-2 border-solid border-[#ff0000] dark:border-2 dark:border-solid dark:border-[#ff0000] text-[#ff0000] dark:bg-[#3a3a3aaa] dark:text-[#ff0000] rounded-[6px]' onClick={aboutPageHandler}>
                About
              </button>
              <button id='contactbtn' className='w-28 h-10 bg-[#ff0000] text-[#ffffff] dark:bg-[#ff0000] dark:text-[#fff] rounded-[6px]' onClick={contactPageHandler}>
                Contact
              </button>
            </div>

            <div className="basic flex flex-col gap-y-2">
              <p className='text-[1.2rem]'>Share it on</p>
              <ul className='flex gap-2 items-center justify-center h-10 '>
                {/* Copy to clipboard */}
                <li>
                  <button className="copy" onClick={handleCopyToClipboard}>
                    <span data-text-end="Copied!" data-text-initial="Copy to clipboard" className="tooltip"></span>
                    <span>
                      <svg space="preserve" viewBox="0 0 6.35 6.35" y="0" x="0" height="20" width="20" xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" class="clipboard">
                        <g>
                          <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                        </g>
                      </svg>
                      <svg space="preserve" viewBox="0 0 24 24" y="0" x="0" height="18" width="18" xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" class="checkmark">
                        <g>
                          <path data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </li>

                {/* whatsapp */}
                <li className='w-10 h-10 '>
                  <WhatsappShareButton
                    url={'https://github.com/next-share'}
                    title={'next-share is a social share buttons for your next React apps.'}
                    separator=":: "
                  >
                    <WhatsappIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                  </WhatsappShareButton>
                </li>

                {/* {Facebook} */}
                <li className='w-10 h-10 '>
                  <FacebookShareButton
                    url={'https://github.com/next-share'}
                    quote={'next-share is a social share buttons for your next React apps.'}
                    hashtag={'#nextshare'}
                  >
                    <FacebookIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                  </FacebookShareButton>
                </li>

                {/* Twitter */}
                <li className='w-10 h-10 '>
                  <TwitterShareButton
                    url={'https://github.com/next-share'}
                    title={'next-share is a social share buttons for your next React apps.'}
                  >
                    <TwitterIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                  </TwitterShareButton>
                </li>

                {/* Telegram */}
                <li className='w-10 h-10 '>
                  <TelegramShareButton
                    url={'https://github.com/next-share'}
                    title={'next-share is a social share buttons for your next React apps.'}
                  >
                    <TelegramIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                  </TelegramShareButton>
                </li>

                {/* Link */}
                <li className='w-10 h-10 '>
                  <LineShareButton
                    url={'https://github.com/next-share'}
                    title={'next-share is a social share buttons for your next React apps.'}
                  >
                    <LineIcon className='w-10 h-10 scale-90 hover:scale-100' round />
                  </LineShareButton>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center'>
          <h1 id='followtxt' className=''>Social media</h1>
          <div className="hsmline bg-[#ff0000] w-1 h-20 mx-2"></div>
          <div className="links grid place-items-center grid-cols-2 grid-rows-2 gap-2 px-2 py-4">
            <Link className='linksCon bg-[#dadada] dark:bg-[#2d2d2daa] p-[1.3rem]' id='link1' href="https://t.me/your-telegram-channel">
              <svg className='text-black dark:text-white' id='linkIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </Link>

            {/* <div className="hline my-2 bg-[#535353] dark:bg-[#939393]"></div> */}

            <Link className='linksCon bg-[#dadada] dark:bg-[#2d2d2daa] p-[1.3rem]' id='link2' href="https://twitter.com/your-twitter-handle">
              <svg className='text-black dark:text-white' id='linkIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
              </svg>
            </Link>

            {/* <div className="hline my-2 bg-[#535353] dark:bg-[#939393]"></div> */}

            <Link className='linksCon bg-[#dadada] dark:bg-[#2d2d2daa] p-[1.3rem]' id='link3' href="https://github.com/ArNAB-0053/ANIHUB4U">
              <svg className='text-black dark:text-white' id='linkIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </Link>

            {/* <div className="hline my-2 bg-[#535353] dark:bg-[#939393]"></div> */}

            <Link className='linksCon bg-[#dadada] dark:bg-[#2d2d2daa] p-[1.3rem]' id='link4' href="https://www.instagram.com/__arnab_bhattacharyya/">
              <svg className='text-black dark:text-white' id='linkIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={`about-content dark:bg-[#ffffff59]  ${aboutOpen ? 'clicked' : ''}`}>
          Magnam dolorem, sunt a earum ipsa eligendi officiis cumque maiores debitis adipisci voluptatem? Consequuntur, neque incidunt facilis error culpa explicabo dolorum ullam accusantium dolorem rem ut similique porro minus voluptatem repellat numquam odit fugit optio adipisci beatae quo enim vitae quod. Consectetur a tempora, ipsa quibusdam, obcaecati dolores blanditiis labore qui totam eligendi aliquid doloremque ipsum officiis sit magni. Sapiente commodi saepe velit perspiciatis eos delectus minus, sequi inventore? Consectetur quas at iure, praesentium tenetur ut enim rerum similique. Cupiditate, et. Blanditiis, velit? Nesciunt, minima praesentium alias aperiam iusto quasi odit eum facilis quae ipsum quis non cumque tempora sed porro ea molestias? Eum temporibus expedita doloribus suscipit saepe aliquid cum distinctio fuga deserunt, libero, ducimus culpa minus incidunt accusantium ut ullam optio molestiae nulla magnam illo neque. Magni ab temporibus animi ut architecto at id natus ullam illum in distinctio cupiditate, ratione mollitia odio, quasi fugit reiciendis quod vero saepe consequatur suscipit quam, tempore repudiandae veniam. Voluptates quam saepe minus qui eligendi, quos eaque officia consectetur distinctio reiciendis id odio ratione atque possimus non quaerat, perferendis autem unde doloribus provident assumenda quo impedit! Officiis eum laborum accusamus earum quo amet quasi possimus? Aliquam nisi architecto necessitatibus eligendi distinctio ut quas ad dolor inventore tenetur. Facilis magnam ipsam eos ullam possimus dignissimos incidunt inventore eligendi fuga! Perferendis molestias officia sint quasi rem provident quas dolorem iusto qui quis fugiat similique vel quia saepe hic obcaecati ipsa in ea quam mollitia, deserunt magnam.
        </div>

        <div className={`contact-content dark:bg-[#ffffff59]  ${contactOpen ? 'clicked' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem perferendis nesciunt doloribus iure veritatis ipsa vitae odit hic expedita omnis doloremque, natus dolores voluptas impedit temporibus corrupti tempora tenetur? Libero, corporis voluptatem repellat natus ipsum delectus iure quibusdam. Quibusdam nam officiis possimus quidem omnis.
        </div>
        <div className={`whole dark:bg-[#00000066] ${isBlur ? 'blured' : ''}`}></div>
      </div>
    </>
  )
}

export default Footer

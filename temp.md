<ul id='perLink' className='flex gap-2 items-center justify-start mt-1'>
            {/* whatsapp */}
            <li className='w-10 h-10 '>
                <WhatsappShareButton
                    url={`https://wa.me/624767878`}
                    title={'next-share is a social share buttons for your next React apps.'}
                >
                    <WhatsappIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                </WhatsappShareButton>
            </li>

            {/* {Facebook} */}
            <li className='w-10 h-10 '>
                <FacebookShareButton
                    url={'https://www.facebook.com/arnab.bhattacharyya.520'}
                    quote={'next-share is a social share buttons for your next React apps.'}
                >
                    <FacebookIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                </FacebookShareButton>
            </li>

            {/* Twitter */}
            <li className='w-10 h-10 '>
                <TwitterShareButton
                    url={'https://twitter.com/Arnab19_12_2002'}
                    title={'next-share is a social share buttons for your next React apps.'}
                >
                    <TwitterIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                </TwitterShareButton>
            </li>

            {/* Linkedin */}
            <li>
                <LinkedinShareButton url={'https://www.linkedin.com/in/arnab-bhattacharyya-380966291/'}>
                    <LinkedinIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                </LinkedinShareButton>
            </li>

            {/* Instagram */}
            <li>
                <Link href="https://www.instagram.com/__arnab_bhattacharyya/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className='w-10 h-10 scale-90 hover:scale-110' round />
                </Link>
            </li>

            {/* Github */}
            <li>
                <Link href="https://github.com/ArNAB-0053">
                    <GithubIcon className='w-10 h-10 scale-90 hover:scale-110 dark:invert' round />
                </Link>
            </li>
        </ul>
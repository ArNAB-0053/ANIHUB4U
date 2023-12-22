'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import '../styles/profile.css'
import '../styles/sendani.css'
import '../styles/loginbtn.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const [isBlur, setisBlur] = useState(false)
    const authRef = useRef(null);

    const showauth = () => {
        if (authRef.current) {
            setTimeout(() => {
                authRef.current.showModal();
            }, 400);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setisBlur(true);
        }
    };

    const closeauth = () => {
        if (authRef.current) {
            setTimeout(() => {
                setisBlur(false);
            }, 400);
            authRef.current.close();
        }

        setTimeout(() => {
            setShowSigninForm(true);
            setShowSignUpForm(false);
        }, 400);
    };


    // Array of image names
    const imageNames = [
        'naruto.svg',
        'bleach.svg',
        'luffy.svg',
        'gojo.svg',
        'tokyoghoul.svg',
        'asta.svg',
        'asta2.svg',
        'deku.svg',
        'mha.png',
        'jiraiya.svg',
        'aot.png'
    ];

    // State to hold the selected image
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * imageNames.length);
            return imageNames[randomIndex];
        };

        const intervalId = setInterval(() => {
            setTimeout(() => {
                setSelectedImage(getRandomImage());
            }, 200);
        }, 19000);

        setSelectedImage(getRandomImage());

        return () => clearInterval(intervalId);
    }, []);


    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showSigninForm, setShowSigninForm] = useState(true);
    const handleSignUpClick = () => {
        setShowSignUpForm(true);
        setShowSigninForm(false);
    };

    const handleSignInClick = () => {
        setShowSigninForm(true);
        setShowSignUpForm(false);
    };


    // Toastify 
    const notification = (e) => {
        e.preventDefault();
        toast.info("Coming soon! 🚀")
    };

    return (
        <>
            <button className='hidden'>
                <Image
                    src='/Images/zoro.jpg'
                    width="1920"
                    height="200"
                    id='profileImg'
                    className='profile'>
                </Image>
            </button>

            {/* <button id='authbtn' className="button type1 w-28 h-10 text-[#ffffff] dark:text-[#fff] rounded-[6px]" onClick={showauth}>
                <span clasName="btn-txt">Log in</span>
            </button> */}

            <button id='authbtn' type="button" className="dark:bg-[#ff4a4ab1] bg-[#3D30CB]" onClick={showauth}>
                <span className="button__text uppercase text-sm">Log in</span>
                <span className="button__icon dark:bg-[#ff00009a] bg-[#382f9a] dark:shadow-custom-shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left w-[1.3rem] h-[1.3rem]" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                        <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg>
                </span>
            </button>

            <dialog ref={authRef} className='text-white bg-[#222222a4] dark:bg-[#3d3d3d4d] w-[70vw] h-[70vh] ml-[15vw] mt-[15vh] px-20 py-8 overflow-hidden border-[1px] border-solid border-[#ff0000aa] flex'>

                {showSigninForm && (
                    <form id='authform' action="form" className='flex flex-col gap-y-6 w-[50%] ml-[-2rem] justify-center'>
                        <h1 id='authhead' className='uppercase text-[#ff3a3a] text-[4rem] text-center'>Log in</h1>

                        <span className='flex place-self-center items-center justify-center gap-2 bg-[#454545] dark:bg-[#484848db] rounded-[5rem] h-[2.3rem] px-6 py-2 text-[#dadada] w-[90%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                            <input
                                type="text"
                                placeholder='Email'
                                className='bg-transparent w-full h-full'
                            />
                        </span>

                        <div className='flex items-center justify-center flex-col'>
                            <span className='flex place-self-center items-center justify-center gap-2 bg-[#454545] dark:bg-[#484848db] rounded-[5rem] h-[2.3rem] px-6 py-2 text-[#dadada] w-[90%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                </svg>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='bg-transparent w-full h-full'
                                />
                            </span>
                            <button className='flex place-self-end mr-8 text-sm text-zinc-300 hover:text-red-400'>
                                Forget password?
                            </button>
                        </div>

                        <button id='loginbtn' className='uppercase flex place-self-center items-center justify-center' onClick={notification}>
                            log in
                        </button>

                        <div className='flex items-center justify-center gap-4 w-full'>
                            <div className='w-[40%] h-[1px] bg-[#585858]'></div>
                            <h1 className='text-[#858585] bold uppercase block text-center'>or </h1>
                            <div className='w-[40%] h-[1px] bg-[#585858]'></div>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <button id='loginlinks' className='google flex items-center justify-center gap-2' onClick={notification}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google w-4 h-4" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>Google
                            </button>

                            <button id='loginlinks' className='facebook flex items-center justify-center gap-2 ' onClick={notification}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook w-4 h-4 " viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>Facebook
                            </button>

                            <button id='loginlinks' className='github flex items-center justify-center gap-2 ' onClick={notification}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github w-4 h-4" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>Github
                            </button>
                        </div>

                        <div className='imagetransition'>
                            <Image
                                src={`/Images/imgs/${selectedImage}`}
                                width="1920"
                                height="200"
                                id='authbgImg'
                                className='absolute right-0 top-0 w-[50%] h-full object-cover'
                            />
                            <div className='bg-[#0000005a] absolute left-[50%] top-0 w-[50%] h-full flex items-center justify-end flex-col px-8 py-16'>
                                <h1 id='newhere' className='text-[3rem] text-center'>New here?</h1>
                                <p>Sign up and discover a great amount of new opportunities!</p>
                                <button className='signupbtn mt-6 uppercase flex place-self-center items-center justify-center px-6 py-2 rounded-full' onClick={handleSignUpClick}>
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </form>
                )}

                {showSignUpForm && (
                    <form
                        action="form"
                        id='authform'
                        className={`flex w-full ml-[8rem] justify-end items-start`}
                    >
                        <div className='imagetransition'>
                            <Image
                                src={`/Images/imgs/${selectedImage}`}
                                width="1920"
                                height="200"
                                id='authbgImg'
                                className='absolute left-0 top-0 w-[50%] h-full object-cover'
                            />
                            <div className='bg-[#0000005a] absolute left-0 top-0 w-[50%] h-full flex items-center justify-end flex-col px-8 py-16'>
                                <h1 id='newhere' className='text-[3rem] text-center'>Have account?</h1>
                                <p className='text-center text-sm'>Welcome back, hope you enjoy your stay and have a fantastic experience!</p>
                                <button className='signupbtn mt-6 uppercase flex place-self-center items-center justify-center px-6 py-2 rounded-full' onClick={handleSignInClick}>
                                    Log in
                                </button>
                            </div>
                        </div>

                        <div id='signupdiv' className='w-[50%] flex flex-col gap-y-4'>
                            <h1 id='authhead' className='uppercase text-[#ff3a3a] text-[4rem] text-center'>Sign up</h1>

                            <span className='flex place-self-center items-center justify-center gap-2 bg-[#454545] dark:bg-[#484848db] rounded-[5rem] h-[2.3rem] px-6 py-2 text-[#dadada] w-[100%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='bg-transparent w-full h-full'
                                />
                            </span>

                            <span className='flex place-self-center items-center justify-center gap-2 bg-[#454545] dark:bg-[#484848db] rounded-[5rem] h-[2.3rem] px-6 py-2 text-[#dadada] w-[100%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    className='bg-transparent w-full h-full'
                                />
                            </span>

                            <span className='flex place-self-center items-center justify-center gap-2 bg-[#454545] dark:bg-[#484848db] rounded-[5rem] h-[2.3rem] px-6 py-2 text-[#dadada] w-[100%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                </svg>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='bg-transparent w-full h-full'
                                />
                            </span>

                            <span className='flex place-self-center items-center justify-center gap-2 bg-[#454545] dark:bg-[#484848db] rounded-[5rem] h-[2.3rem] px-6 py-2 text-[#dadada] w-[100%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                </svg>
                                <input
                                    type='password'
                                    placeholder='Conform Password'
                                    className='bg-transparent w-full h-full'
                                />
                            </span>

                            <button id='loginbtn' className='uppercase flex place-self-center items-center justify-center' onClick={notification}>
                                Sign Up
                            </button>

                            <div className='flex items-center justify-center gap-4 w-full'>
                                <div className='w-[40%] h-[1px] bg-[#585858]'></div>
                                <h1 className='text-[#858585] bold uppercase block text-center'>or </h1>
                                <div className='w-[40%] h-[1px] bg-[#585858]'></div>
                            </div>

                            <div className='flex items-center justify-center gap-4'>
                                <button id='loginlinks' className='google flex items-center justify-center gap-2' onClick={notification}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google w-4 h-4" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                    </svg>Google
                                </button>

                                <button id='loginlinks' className='facebook flex items-center justify-center gap-2 ' onClick={notification}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook w-4 h-4 " viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>Facebook
                                </button>

                                <button id='loginlinks' className='github flex items-center justify-center gap-2 ' onClick={notification}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github w-4 h-4" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>Github
                                </button>
                            </div>
                        </div>
                    </form>
                )}

                {/* Cross btn */}
                <button id='cntBtn' className='bg-[#ff0000]  text-white absolute left-[95%] top-0 w-14 h-12 overflow-hidden' onClick={closeauth}>
                    <Image
                        src='/Images/cross.svg'
                        width="1920"
                        height="200"
                        id='crossImg'
                        className='w-[2.2rem] h-[2.2rem] pl-4'>
                    </Image>
                </button>

            </dialog >
            <div className={`whole h-[200vh] bg-[#515151a4] dark:bg-[#3d3d3d4d] ${isBlur ? 'blured' : ''}`}></div>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </>
    )
}

export default Profile

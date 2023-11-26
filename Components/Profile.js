import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <button>
            <Image
                src='/Images/zoro.jpg'
                width="1920"
                height="200"
                id='profileImg'
                className='profile'>
            </Image>
        </button>
    )
}

export default Profile

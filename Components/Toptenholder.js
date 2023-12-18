import React from 'react';
import Body from '@/Components/Body';
import Topten from '@/Components/Topten';
// import Link from 'next/link';

const Toptenholder = ({ baseURL, endpoint, type }) => {
    // const [firstItems, setFirstItems] = useState(5);
    // const [lastItems, setLastItems] = useState();

    // const handleAnotherButtonClick = () => {
    //     const newFirstItem = firstItems + 12
    //     const newLastItems = lastItems + 12;
    //     setFirstItems(newFirstItem);
    //     setLastItems(newLastItems);
    //     console.log(firstItems, lastItems)
    // };

    return (
        <div className='flex mx-16 justify-between mb-[2rem]'>
            <div className='flex w-[32vw] items-start flex-col justify-center h-full mt-32'>
                <h1 id='top5' className='text-[2rem] dark:text-[#ff0000] text-[#3d30cb]'>Top 5</h1>
                <div className="w-[70%] h-[1px] dark:bg-red-500 bg-[#3d30cb]"></div>
                <Topten
                    baseURL={baseURL}
                    endpoint={endpoint}
                    slicingStart={0}
                    numItems={5}
                    rankingStyle="block"
                />
            </div>
            <div className='flex flex-col items-start justify-start mt-28 px-2'>
                <h1 id='headindtype' className='ml-5 text-[3rem] dark:text-[#ff0000] text-zinc-700'>{type}</h1>
                <div className="w-[90%] h-[1px] ml-5 dark:bg-red-500 bg-zinc-700"></div>
                <Body
                    baseURL={baseURL}
                    endpoint={endpoint}
                    titleClass='w-64'
                    styleClass='grid grid-rows-auto grid-cols-4 place-self-end gap-y-6 w-[60vw] '
                    slicingStart={5}
                    styleRounded='rounded'
                    linkWH='w-60'
                />
                {/* <button onClick={handleAnotherButtonClick}>
                    Another
                </button> */}
            </div>
        </div>
    );
}

export default Toptenholder;
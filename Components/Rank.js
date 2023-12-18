import React from 'react'

const Rank = ({ rankingStyle, rank }) => {
    return (
        <div id='rank' className={`absolute right-0 top-0 text-[1.3rem] dark:bg-[#ff0000] text-white bg-[#3d30cb] p-1 w-12 flex items-center justify-center gap-1 h-8 text-center aspect-square ${rankingStyle}`}>            
            0{rank}
        </div>
    )
}

export default Rank

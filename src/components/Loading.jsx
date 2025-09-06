import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// css inject in index.css file

const Loading = () => {
    return (
        <div className='loading-container'>
            <AiOutlineLoading3Quarters size={20} />
        </div>
    )
}

export default Loading
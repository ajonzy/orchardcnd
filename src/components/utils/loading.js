import React from 'react'

import LoadingGIF from "../../../static/assets/images/loading.gif"

export default function Loading(props) {
    return (
        <div className='loading-wrapper'>
            <img src={LoadingGIF} alt="Loading..." />
            <div>{props.message}</div>
        </div> 
    )
}
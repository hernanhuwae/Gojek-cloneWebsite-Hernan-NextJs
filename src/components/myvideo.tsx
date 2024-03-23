import React from "react"

const VideoKomponen: React.FC=()=>{
    return(
        <div>
            <video  src="iklan/video.mp4" controls autoPlay loop className="w-[500px]"></video>
        </div>
    )
}

export default VideoKomponen
import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onSelectedVid }) => {
    
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                onSelectedVid={onSelectedVid}
                key={video.id.videoId}
                video={video}
            />
        )
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;

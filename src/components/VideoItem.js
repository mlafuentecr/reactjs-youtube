const VideoItem = ({videos, setVideoSelected}) => {

	return (
    <>
				{videos.map(( video ) => (
					<div className='videoItem' key={video.id.videoId}  onClick={() => setVideoSelected({video})}>
            <div className="videoThumb">
            <img
							key={video.videoId}
							alt={video.snippet.title}
							src={video.snippet.thumbnails.medium.url}
						/>
            </div>
						<div className='title'>{video.snippet.title}</div>
					</div>
				))}

				<div className='imgCount'>
					{`( Total videos found ${videos.length} )`}
				</div>
        </>
	);
};

export default VideoItem;

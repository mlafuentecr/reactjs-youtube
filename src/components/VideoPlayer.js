import './css/VideoPlayer.css';

const VideoPlayer = ({ videoSelected }) => {
	console.log('videoSelected');
  console.log(videoSelected.video.snippet);
  
	if (videoSelected) {
    const videoId = videoSelected.video.id.videoId;
    const snippetV = videoSelected.video.snippet;
		return (
			<div className='videoplayer'>
				<div className='video-secction'>
					<iframe
						width='560'
						height='315'
						src={`https://www.youtube.com/embed/${videoId}`}
						frameborder='0'
					></iframe>
				</div>
				<div className='descript'>
					<h2>{snippetV.title}</h2>
					<p>{snippetV.description}cccc</p>
				</div>
			</div>
		);
	}
	return <></>;
};

export default VideoPlayer;

import './css/videoList.css'
import VideoItem from './VideoItem'


const VideoList = ({videos, setVideoSelected}) => {

  if(videos){
  if(videos.length !== 0){
    return (
      <div className={`VideoList`}>
      <VideoItem 
      videos={videos} 
      setVideoSelected={setVideoSelected}
      />  
      </div>
    );
  }
}

  //if there is not videos
return (<></>)

};



export default VideoList;
import React, { useState } from 'react';
import Header from './Header';

import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import './css/App.css';

function App() {
	const [videos, setVideos] = useState([]);
	const [videoSelected, setVideoSelected] = useState('');



	return (
		<div className='App pad-20'>
			<div
				className={`ui container ${
					videoSelected.length !== 0 ? 'withPlayer' : ''
				}`}
			>
				<Header setVideos={setVideos} />
				<VideoPlayer videoSelected={videoSelected} />
				<VideoList 
					videos={videos} 
					setVideoSelected={setVideoSelected}
				 />
			</div>
		</div>
	);
}

export default App;

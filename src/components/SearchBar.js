import React, { useState, useEffect } from 'react';
import YoutubeAPi from '../apis/Youtube'

const SearchBar = ({setVideos, clearVideo}) => {
	const [inputSearch, setInputSearch] = useState('');

	const handleKeyDown = (e) => {
		setInputSearch(e.target.value);
	};

useEffect(() => {

	onFormSubmit( 'trending');
}, [])
    
  //Query Images on Submit
  async function onFormSubmit(e, term) {
		if(e.preventDefault){e.preventDefault()}
    //call to the api 
    const response = await YoutubeAPi.get('/search', {
      params: { q: term }
    });
   //props.setImages(response.data.results);
		//send result to other component
		setVideos(response.data.items)
		clearVideo('');
  }


	return (
		<div className='search-bar'>
			<form   onSubmit={(e)=>onFormSubmit(e, inputSearch) } className='ui form'>
				<div className=' search'>
					<div className='ui icon input'>
						<input
							className='prompt'
							type='text'
							placeholder='Search image herex'
							value={inputSearch}
							onChange={handleKeyDown}
						/>
						<i className='search icon'></i>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;

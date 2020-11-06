import React, { useState } from 'react';
import YoutubeAPi from '../apis/Youtube'

const SearchBar = (props) => {
	const [inputSearch, setInputSearch] = useState('');

	const handleKeyDown = (e) => {
		setInputSearch(e.target.value);
	};

    
  //Query Images on Submit
  async function onFormSubmit(e, term, props) {
    e.preventDefault();
    //call to the api 
    const response = await YoutubeAPi.get('/search', {
      params: { q: term }
    });
   //props.setImages(response.data.results);
		//send result to other component
		props.setVideos(response.data.items)
		props.clearVideo('');
  }


	return (
		<div className='search-bar'>
			<form   onSubmit={(e)=>onFormSubmit(e, inputSearch, props) } className='ui form'>
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

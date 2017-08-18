import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const ;
// create a new component. This component should produce some HTML
// JSX 
const App = () => {
	return ( 
		<div>
			<SearchBar />
		</div>
	);
}


// Take this component's generated HTML and put it on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));
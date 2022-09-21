import React, {useState} from "react";

const Search = ({searchText}) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		searchText(text);
	}
	return (
		<form onSubmit={ handleSubmit } className="form">
			<input 
				type="text" 
				placeholder="Search news" 
				onChange={ (e) => setText(e.target.value)} />
			<button type="submit" > Search </button>
		</form>
		)
}
export default Search;
import React, {useState, useEffect} from "react";
import Card from "./card";
const Main = () => {

	const [search, setSearch] = useState("");
	const [bookdata, setdata] = useState([]);

	const url = "https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=40&key=AIzaSyA--VT59FYtQ5irUqLHoB1BXiKaU8xjH9k";
	async function searchbook () {
		
		try{
			const response = await fetch(url);
			const datas = await response.json();
			console.log(datas.items);
			setdata(datas.items);
		} catch(e){
			console.log(e)
		}
	
	}

	useEffect( () => {
		searchbook();
	}, [])
	return(
		<>
		<div className="header">
			<div className="row1">
				<h1> A rooom without book is like <br/> a body without a soul</h1>
			</div>

			<div className="row2">
				<h2> Find your book </h2>
				<div className="search">
				<form onSubmit={searchbook}>
					<input 
					type="text" 
					value={search} 
					placeholder="Search a book"
					onChange={ e=>setSearch(e.target.value)}
					onKeyPress = { e=> searchbook(e)}/>
					<button onClick={searchbook}> <i class="fas fa-search"> </i> </button>
				</form>
				</div>

				<img src="bg2.png" alt="bg" />
			</div>
		</div>

		<div className="container">
			< Card book={bookdata}/>

		</div>
		</>
		)
}
export default Main;
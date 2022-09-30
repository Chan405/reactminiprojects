import React, {useState} from "react";
import Modal from "./modal"
const Card = ({book}) => {
	const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
	console.log(book);
	
	return(
	<>
	{
		book.map( (item) => {
			let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
			
			if(thumbnail !== undefined) {
				return(
				<>
				<div 
				key={item.id} 
				className="card" 
				onClick={()=>{setShow(true);setItem(item)}}
				>
					<img src={thumbnail} alt='book' />
					<div className="bottom">
						<h3 className="title">{item.volumeInfo.title}</h3>
						
					</div>
				</div>

				 <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
				</>)
			}
		})
	}
	</>
	)
	
	
}
export default Card;
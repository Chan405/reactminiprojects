import React from "react";
import SingleNewsCard from "./singlenewscard";
import { Grid } from "@material-ui/core";


const Cards = ({cards, removeNews}) => {
	return(
		<Grid container spacing={4}>
		{ cards.map( (card) => 
			<Grid item key={card.url} sx={ {m: 2}}>
				<SingleNewsCard  {...card} removeNews={removeNews} /> 
			</Grid> ) }
		</Grid>
		)
}
export default Cards;
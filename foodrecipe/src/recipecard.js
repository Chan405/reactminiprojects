import React from 'react';

const Recipecard = ({recipe}) => {
	return(
	<div className='recipecard' onClick={()=>{window.location.href=recipe.recipe.url}}>
	<img src= {recipe.recipe.image} alt="image" className='img'/>
	<p className='name'> {recipe.recipe.label} </p>
	<p className='type'> {recipe.recipe.mealType} <br/>
	 <small>{recipe.recipe.cuisineType}</small> </p>
	</div>	)
}

export default Recipecard;
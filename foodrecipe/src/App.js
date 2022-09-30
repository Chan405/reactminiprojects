import React, {useState, useEffect} from 'react';
import Recipecard from './recipecard';
// e2667a3c
// cddcc50b5b54be9e92e118be818480d3
// https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

const appid = 'e2667a3c';
const apikey = 'cddcc50b5b54be9e92e118be818480d3';

function App() {

  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthlabel] = useState('vegan');

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${apikey}&&health=${healthLabel}`;

  const getrecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  useEffect( () => {
    getrecipes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getrecipes();
  }
  return (
    <div className='app'>
      <h2>Food recipe</h2>

      <form className='searchForm' onSubmit={handleSubmit}>
        <input
            type='rext'
            placeholder='Search...' 
            className='input'
            value={query}
            onChange={ e => setQuery(e.target.value)}/>
        <input type='submit' className='submit' value='Search' />

      </form>
      <div className='recipes'>
      {
        recipes.map( (recipe,idx) => <Recipecard key={idx} recipe={recipe}/>)
      }
      </div>
    </div>
  )
}

export default App

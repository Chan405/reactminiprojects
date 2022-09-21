import React, { useState, useEffect } from 'react'
import NewsCards from "./newscards";
import Search from "./search";
import { Grid } from "@material-ui/core";


function App() {
  const [value, setValue] = useState([]);
  const [query, setQuery] = useState("apple");
  const [loading, setLoading] = useState(true);

  const url = `https://newsapi.org/v2/everything?q=${query}&from=2022-09-20&to=2022-09-20&sortBy=popularity&apiKey=730b3186b0334f5fb1e12fb91ae7ffdf`;

  const removenews = (url) => {
    let newNews = value.filter( (v) => v.url !== url);
    setValue(newNews);
  }

  async function ak() {
    setLoading(true)
    try{
      let response = await fetch(url);
      let results = await response.json();
      // console.log(results.articles);

      const articles = results.articles;

      setLoading(false);
      setValue(articles)
    } catch(e) {
      setLoading(true);
      console.log(e)
    }
  }

  useEffect( () => { ak(); }, [query])

  if(loading){
    return (
       <h3> Loading...</h3>
      );
  }
  return(
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={0} sm={2}/> 
        <Grid item xs={12} sm={8} > <Search searchText={ (text) => setQuery(text)} /> </Grid>
        <Grid item xs={0} sm={2}/> 
      </Grid>

      <Grid item container>
        <Grid item xs={0} sm={2}/> 
        <Grid item xs={12} sm={8} > <NewsCards cards={value} removeNews = {removenews} /> </Grid>
        <Grid item xs={0} sm={2}/> 
      </Grid>
    </Grid>
    )
}

export default App

import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15099').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    } catch(e) {
      setError(true);
      console.log(e)
    }
  }
  return(
    <>
    <section className="container">
      <h3> Color generator </h3>
      <form onSubmit={ handleSubmit}>
        <input 
            type="text" 
            value={color} 
            onChange={ (e) => setColor(e.target.value) } 
            placeholder="#f1f1f1"
            className={`${error ? 'error' : null}`}/>
        <button type="submit" className="btn"> Generate </button>
      </form>
    </section>

    <section className="colors">
    {
      list.map( (color, index) => {
        console.log(color);
        return <SingleColor key={index} {...color} index={index} hexcolor={color.hex} />
      } )
      
    }
    </section>
    </>
    )
}

export default App
